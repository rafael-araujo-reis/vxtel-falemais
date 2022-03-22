import Head from 'next/head';
import Button from '../components/Button';
import { usePlans } from '../hooks/usePlans';
import { plans } from '../pages/api/plans';
import { formatPrice } from '../utils/format';
import styles from './home.module.scss';
import ButtonLink from '../components/ButtonLink';


export default function Home() {

  const {
    handleSearchDDD,
    handleSelectPlanSimulate,
    handleSelectMinutesConversation,
    minutes,
    withPlan,
    withoutPlan
  } = usePlans();

  function handleInputSearchDDD(event) {
    const id = event.target.id;
    const valueSearch = event.target.value;
    handleSearchDDD(valueSearch, id);
  }

  function handleSelectPlan(event) {
    const valuePlan = event.target.value;
    handleSelectPlanSimulate(valuePlan);
  }

  function handleSelectMinutes(event) {
    const minutes = event.target.value;
    handleSelectMinutesConversation(minutes);
  }

  // const range = document.getElementById('range');
  // const rangeV = document.getElementById('rangeV');
  // const setValue = () => {
  //   const newValue = Number((range.value - range.min) * 100 / (range.max - range.min));
  //   const newPosition = 10 - (newValue * 0.2);
  //   rangeV.innerHTML = `<span>${range.value}</span>`;
  //   rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  //   console.log("newValue", newValue);
  //   console.log("newPosition", newPosition);
  // };
  // document.addEventListener("DOMContentLoaded", setValue);
  // range.addEventListener('input', setValue);

  // console.log("range", range);
  // console.log("rangeV", rangeV);
  // console.log("setValue", setValue);

  return (
    <>
      <Head>
        <title>VxTel | Home</title>
      </Head>
      <main >
        <section className={styles.containerSection} id="home">
          <div className={styles.containerHome}>
            <section className={styles.contenteHeaderSection}>
              <h1>Chegou o plano <span className={styles.logoFale}>Fale+</span></h1>
              <ul>
                <li>+ Conversas e menos gastos</li>
                <li>+ Praticidade</li>
                <li>- Surpresas na sua conta</li>
              </ul>
            </section>
          </div>

          {/* <ButtonLink titleButton='Simular contratação' colorButton='yellow' click={'#simulateHiring'} /> */}
          <Button titleButton='Simular contratação' colorButton='yellow' />

        </section>

        <section id="simulateHiring" className={styles.containerSection}>

          <div className={styles.containerSimulateHiring}>
            <section className={styles.contenteHeaderSection}>
              <h1>Simule aqui o seu plano ideal  <span className={styles.logoFale}>Fale+</span></h1>
              <div className={styles.originDestinationContainer}>
                <p>Escolha a origem e destino da ligação:</p>
                <div className={styles.originDestinationContente}>
                  <input
                    type="number"
                    placeholder={'DDD de onde deseja ligar'}
                    onBlur={handleInputSearchDDD}
                    maxLength={2}
                    id={'origin'}
                  />
                  <input
                    type="number"
                    placeholder={'DDD para onde deseja ligar'}
                    onBlur={handleInputSearchDDD}
                    maxLength={2}
                    id={'destination'}
                  />
                </div>
              </div>
            </section>

            <section className={styles.availablePlans}>
              <p className={styles.titleAvailablePlans}>Selecione seu plano atual:</p>
              <div className={styles.plans}>
                {
                  plans.map((plan) => {
                    return (
                      <>
                        <input
                          type="radio"
                          name="plans"
                          id={plan.id}
                          value={plan.minutes}
                          onClick={handleSelectPlan}
                        />
                        <label
                          htmlFor={plan.id}
                          className={styles.logoFale}
                        >
                          Fale+
                          <p>{plan.minutes}<span>min/mês</span></p>
                        </label>
                      </>
                    );
                  })
                }
              </div>
            </section>

            <section className={styles.rangeMinutesSection}>
              <p className={styles.titleRangeMinutes}>Selecione quantos minutos pretende falar:</p>

              <div className={styles.rangeWrap}>
                <div className={styles.rangeValue} id={'rangeV'}>{minutes}</div>
                <input id="range" type="range" min="0" max="500" value="0" step="10" onChange={handleSelectMinutes} />
              </div>

            </section>

            <section className={styles.resultSimulate}>
              <div style={{ backgroundColor: '#00A067', color: '#FFFFFF' }}>
                <p>Com plano</p>
                <h2 className={styles.logoFale}>Fale+</h2>

                <p>Seu plano terá um acréscimo de</p>
                <p> {formatPrice(withPlan)} </p>

                <Button titleButton={'Contratar agora'} colorButton={'yellow'} />
              </div>

              <div style={{ backgroundColor: '#FFFFFF', color: '#00A067' }}>
                <p>Sem plano</p>
                <h2 className={styles.logoFale}>Fale+</h2>

                <p>Seu gasto aumentará em</p>
                <p> {formatPrice(withoutPlan)} </p>
              </div>
            </section>
          </div>

        </section>

        {/* <section id="plans" className={styles.containerSection}>
          <div className={styles.containerPlans}>

          </div>
          Planos
        </section> */}
      </main >
    </>
  );
}
