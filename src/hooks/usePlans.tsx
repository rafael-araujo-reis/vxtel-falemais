import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import apiSearchDDD from "../services/search-ddd";

interface PlansProviderProps {
  children: ReactNode;
}

interface Plan {
  namePlan: string;
  pricePlan: number;
}

interface PlansContextData {
  plans: Plan[];
  originDDD: number;
  destinationDDD: number;
  handleSearchDDD: (valueDDD: number) => void;
}

const PlansContext = createContext<PlansContextData>({} as PlansContextData);

export function PlansProvider({ children }: PlansProviderProps): JSX.Element {

  const [plans, setPlans] = useState<Plan[]>([]);
  const [originDDD, setOriginDDD] = useState(0);
  const [destinationDDD, setDestinationDDD] = useState(0);


  useEffect(() => {
    console.log('buscar planos');
  }, []);

  const handleSearchDDD = async (valueDDD: number) => {
    if (valueDDD.toString().length === 2) {
      try {
        apiSearchDDD.get(`/ddd/v1/${valueDDD}`)
          .then((res) => {
            console.log(res.data);
          });

      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    }
  };

  return <PlansContext.Provider
    value={{ plans, originDDD, destinationDDD, handleSearchDDD }}
  >
    {children}
  </PlansContext.Provider>;
}

export const usePlans = () => {
  return useContext(PlansContext);
};