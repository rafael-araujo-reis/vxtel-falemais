import Head from 'next/head';
import { FaInfoCircle } from 'react-icons/fa';
import Button from '../../components/Button';
import ButtonLink from '../../components/ButtonLink';
import { usePlans } from '../../hooks/usePlans';
import { plans } from '../../pages/api/plans';
import { formatPrice } from '../../utils/format';
import styles from './styles.module.scss';

export default function Home() {

  const {
    handleSearchDDD,
    handleSelectPlanSimulate,
    handleSelectMinutesConversation,
    minutes,
    withPlan,
    withoutPlan,
    hasCoverage
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

            <div className={styles.ctaSimmulate}>
              <ButtonLink titleButton='Simular contratação' colorButton='yellow' clickAncora={'#simulateHiring'} />
            </div>
          </div>


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
                <input
                  id="range"
                  type="range"
                  min="0"
                  max="500"
                  value={minutes}
                  step="10"
                  className="thumb thumb--zindex-4"
                  onChange={handleSelectMinutes} />
              </div>

            </section>
            {
              hasCoverage.hasCoverage ?
                (
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
                ) :
                (
                  <section className={styles.alertError}>
                    <div className={styles.boxAlert}>
                      <FaInfoCircle color="#FF9C07" fontSize="3rem" />
                      <p>
                        {hasCoverage.message}
                      </p>
                    </div>
                  </section>
                )
            }

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
