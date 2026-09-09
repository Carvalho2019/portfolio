import Image from 'next/image'
import styles from './styles.module.scss'
const imgAbout = '/images/about.jpeg'


export function About() {
  return (
    <section className={styles.about} id="about">
      <span>Sobre mim</span>
      <h2>Desenvolvedor de software freelancer</h2>
      <div className={styles.grid}>
        <div className={styles.data}>
          <div className={styles.info}>
            <div className={styles.box}>
              <i className='bx bx-award'></i>
              <h3>Experience</h3>
              <span>Experiência profissional</span>
            </div>

            <div className={styles.box}>
              <i className='bx bx-briefcase-alt'></i>
              <h3>Completed</h3>
              <span>12+ projetos</span>
            </div>

            <div className={styles.box}>
              <i className='bx bx-support'></i>
              <h3>Support</h3>
              <span>Comunicação próxima</span>
            </div>
          </div>

          <p>
            Desenvolvo experiências digitais com foco em clareza, performance e resultados.
            Gosto de transformar necessidades reais em interfaces simples e aplicações
            confiáveis, trabalhando próximo de cada cliente e equipa.
            <br></br><br></br>
            Atualmente trabalho como freelancer e continuo a evoluir através de projetos,
            eventos e formação contínua em tecnologia.

            
          </p>

          <a download href='/CurriculumVitaeGeral.pdf' className='button'>Baixar currículo</a>
        </div>
        <Image
          src={imgAbout}
          alt="Picture of the author"
          layout="responsive"
          className={styles.ImageAbout}
        />
      </div>
    </section>
  )
}