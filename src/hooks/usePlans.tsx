import { AxiosError } from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import apiSearchDDD from "../services/search-ddd";
import { DIGITS_DDD } from "../utils/constantes";

interface PlansProviderProps {
  children: ReactNode;
}

interface PlansContextData {
  minutes: number;
  withPlan: number;
  withoutPlan: number;
  handleSearchDDD: (valueDDD: number, id: string) => void;
  handleSelectPlanSimulate: (valuePlan: number) => void;
  handleSelectMinutesConversation: (valueMinutes: number) => void;
}

const PlansContext = createContext<PlansContextData>({} as PlansContextData);

export function PlansProvider({ children }: PlansProviderProps): JSX.Element {

  const [originDDD, setOriginDDD] = useState(0);
  const [destinationDDD, setDestinationDDD] = useState(0);
  const [plan, setPlan] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [withPlan, setWithPlan] = useState(0);
  const [withoutPlan, setWithoutPlan] = useState(0);
  const [priceMinute, setPriceMinute] = useState(0);

  useEffect(() => {

    setOriginDDD(originDDD);
    setDestinationDDD(destinationDDD);
    setPlan(plan);
    setMinutes(minutes);

    searchCallPrice(originDDD, destinationDDD);

    const resultWithPlan = calculatePriceWithPlan(priceMinute, plan, minutes);
    const resultWithoutPlan = calculatePriceWithoutPlan(priceMinute, minutes,);

    setWithPlan(resultWithPlan);
    setWithoutPlan(resultWithoutPlan);

  }, [originDDD, destinationDDD, plan, minutes, withPlan, withoutPlan, priceMinute]);

  const handleSearchDDD = async (valueDDD: number, id: string) => {
    if (valueDDD.toString().length === DIGITS_DDD) {
      try {
        apiSearchDDD.get(`/ddd/v1/${valueDDD}`)
          .then(() => {
            id === 'origin' ? setOriginDDD(valueDDD) : setDestinationDDD(valueDDD);
          })
          .catch((res: AxiosError) => {
            res.response.status === 404 ? (
              console.log('DDD não localizado, favor limpar o campo e informar o usuário')
            ) : (
              console.log('Algo do nosso lado não saiu como esperado, tente pesquisar novamente')
            );
          });
      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    }
  };

  const handleSelectPlanSimulate = (valuePlan: number) => {
    if (valuePlan > 0) {
      setPlan(valuePlan);
    }
  };

  const handleSelectMinutesConversation = (valueMinutes: number) => {
    setMinutes(valueMinutes);
  };

  async function searchCallPrice(originDDD: number, destinationDDD: number) {

    let priceMinutes = 0;

    try {

      await api.get(`/callprice/originDDD/${originDDD}/destinationDDD/${destinationDDD}`)
        .then((res) => {
          const data = res.data.data?.price_minute;
          const result = data !== undefined ? data / 100 : 0;
          setPriceMinute(result);
        });

    } catch (error) {
      console.log('error: ', error);
    }

    return priceMinutes;
  };

  function calculatePriceWithPlan(callPriceByMinutes: number, plan: number, minutes: number) {

    const surplus = minutes - plan;
    const addPrice = surplus <= 0 ? 0 : callPriceByMinutes * surplus * 1.1;

    return addPrice;
  }

  function calculatePriceWithoutPlan(callPriceByMinutes: number, minutes: number) {
    return callPriceByMinutes * minutes;
  }

  return <PlansContext.Provider
    value={{ handleSearchDDD, handleSelectPlanSimulate, handleSelectMinutesConversation, minutes, withPlan, withoutPlan }}
  >
    {children}
  </PlansContext.Provider>;
}

export const usePlans = () => {
  return useContext(PlansContext);
};