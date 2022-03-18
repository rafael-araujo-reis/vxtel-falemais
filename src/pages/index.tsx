import Head from 'next/head';
import Button from '../components/Button';
import ButtonLink from '../components/ButtonLink';
import styles from './home.module.scss';

export default function Home() {
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
                  <input type="number" placeholder={'DDD de onde deseja ligar'} />
                  <input type="number" placeholder={'DDD para onde deseja ligar'} />
                </div>
              </div>
            </section>

            {/* <section className={styles.containerPlains}>
              <p>Selecione quantos minutos deseja falar por mês:</p>
              <div className={styles.plains}>
                <div>
                  <h2>Fale+</h2>
                  <p>30 <span>min/mês</span></p>
                </div>

                <div>
                  <h2>Fale+</h2>
                  <p>30 <span>min/mês</span></p>
                </div>

                <div>
                  <h2>Fale+</h2>
                  <p>30 <span>min/mês</span></p>
                </div>

                <div>
                  <h2>Fale+</h2>
                  <p>30 <span>min/mês</span></p>
                </div>
              </div>
            </section> */}

            <section className={styles.availablePlans}>

              <input type="radio" name="plans" id="30" />
              <label htmlFor="30" className={styles.logoFale}>
                Fale+
                <p>30<span>min/mês</span></p>
              </label>

              <input type="radio" name="plans" id="80" />
              <label htmlFor="80" className={styles.logoFale}>
                Fale+
                <p>80<span>min/mês</span></p>
              </label>

              <input type="radio" name="plans" id="100" />
              <label htmlFor="100" className={styles.logoFale}>
                Fale+
                <p>100<span>min/mês</span></p>
              </label>

              <input type="radio" name="plans" id="200" />
              <label htmlFor="200" className={styles.logoFale}>
                Fale+
                <p>200<span>min/mês</span></p>
              </label>
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
