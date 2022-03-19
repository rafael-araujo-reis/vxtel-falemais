import Head from 'next/head';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import { usePlans } from '../hooks/usePlans';
import styles from './home.module.scss';

export default function Home() {

  const { plans, handleSearchDDD } = usePlans();
  let valueSearch = 0;

  function handleInputSearchDDD(event) {
    console.log('event: ', event);
    valueSearch = event.target.value;
    handleSearchDDD(valueSearch);
  }

  const
    range = document.getElementById('range'),
    rangeV = document.getElementById('rangeV'),

    setValue = () => {
      console.log(range);
      const
        newValue = Number((range.value - range.min) * 100 / (range.max - range.min)),
        newPosition = 10 - (newValue * 0.2);
      rangeV.innerHTML = `<span>${range.value}</span>`;
      rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
    };
  document.addEventListener("DOMContentLoaded", setValue);
  range.addEventListener('input', setValue);

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
                  />
                  <input
                    type="number"
                    placeholder={'DDD para onde deseja ligar'}
                    onBlur={handleInputSearchDDD}
                    maxLength={2}
                  />
                </div>
              </div>
            </section>

            <section className={styles.availablePlans}>
              <p className={styles.titleAvailablePlans}>Selecione seu plano atual:</p>
              <div className={styles.plans}>
                <input type="radio" name="plans" id="30" />
                <label htmlFor="30" className={styles.logoFale}>
                  Fale+
                  <p>30<span>min/mês</span></p>
                </label>

                <input type="radio" name="plans" id="60" />
                <label htmlFor="60" className={styles.logoFale}>
                  Fale+
                  <p>60<span>min/mês</span></p>
                </label>

                <input type="radio" name="plans" id="120" />
                <label htmlFor="120" className={styles.logoFale}>
                  Fale+
                  <p>120<span>min/mês</span></p>
                </label>
              </div>
            </section>

            <section className={styles.rangeMinutesSection}>
              <p className={styles.titleRangeMinutes}>Selecione quantos minutos pretende falar:</p>
              {/* <div className={styles.plans}> */}

              <div className={styles.rangeWrap}>
                <div className={styles.rangeValue} id={'rangeV'}></div>
                <input id="range" type="range" min="0" max="500" value="0" step="10" />
              </div>

            </section>

            <section className={styles.resultSimulate}>
              <div style={{ backgroundColor: '#00A067', color: '#FFFFFF' }}>
                <p>Com plano</p>
                <h2 className={styles.logoFale}>Fale+</h2>

                <p>Seu plano terá um acréscimo de</p>
                <p>
                  <span>R$</span>37,40
                </p>

                <Button titleButton={'Contratar agora'} colorButton={'yellow'} />
              </div>

              <div style={{ backgroundColor: '#FFFFFF', color: '#00A067' }}>
                <p>Sem plano</p>
                <h2 className={styles.logoFale}>Fale+</h2>

                <p>Seu gasto aumentará em</p>
                <p>
                  <span>R$</span>136,00
                </p>
              </div>
            </section>
          </div>

        </section>

        <section id="plains" className={styles.containerSection}>
          <div className={styles.containerPlains}>

          </div>
          Planos
        </section>
      </main >
    </>
  );
}
