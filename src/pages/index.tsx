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
        <section className={styles.containerHome} id="home">

          <div className={styles.containerInfo}>
            <h1>Chegou o plano <span className={styles.logoFale}>Fale+</span></h1>
            <ul>
              <li>+ Conversas e menos gastos</li>
              <li>+ Praticidade</li>
              <li>- Surpresas na sua conta</li>
            </ul>
          </div>

          {/* <ButtonLink titleButton='Simular Contratação' colorButton='yellow' click={'#simulateHiring'} /> */}
          <Button titleButton='Simular Contratação' colorButton='yellow' />

        </section>

        <section id="simulateHiring" className={styles.containerSimulateHiring}>

          <h1>Simule aqui o seu plano ideal  <span className={styles.logoFale}>Fale+</span></h1>
          <div>
            Escolha a origem e destino da ligação:
            <div>
              <input type="text" />
              <input type="text" />
            </div>
          </div>

          <section>
            <p>Selecione quantos minutos desjea falar por mês:</p>
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

          </section>

          <section>
            <div>
              <p>Com plano</p>
              <h2>Fale+</h2>

              <p>Seu plano terá um acréscimo de</p>
              <p>
                <span>R$</span>37,40
              </p>

              <Button titleButton={'Contratar agora'} colorButton={'yellow'} />
            </div>
            <div>
              <p>Sem plano</p>
              <h2>Fale+</h2>

              <p>Seu gasto aumentará em</p>
              <p>
                <span>R$</span>136,00
              </p>
            </div>
          </section>
        </section>

        <section id="planos" className={styles.containerSimulateHiring}>
          Planos
        </section>
      </main>
    </>
  );
}
