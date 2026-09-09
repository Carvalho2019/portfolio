import Image from 'next/image'
import styles from './styles.module.scss'
//import pdfFile from './../../assets/CurriculumVitaeGeral.pdf';
import imgHero from './../../assets/perfil_portfolio.png';

export function Hero() {
  return (
    <section className={styles.container} id="home">
      <div className={styles.grid}>

        <div className={styles.data}>
          <span></span>
          <h1>Olá, sou <a href="#about">Clésio Carvalho</a></h1>
          <h3>Full-stack developer especializado em criar aplicações web e produtos digitais.</h3>

          <div className={styles.HomeButtons}>
            <a className='button' href="#contact">Vamos conversar</a>
            <a className='button button-ghost' download href='/CurriculumVitaeGeral.pdf'>
              Baixar CV
            </a>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image
            src={imgHero}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>

        <a href="#about" className={styles.scroll} aria-label="Ir para a secção sobre mim">
          <i className='bx bx-mouse'></i>
          <span> Scroll Down</span>
        </a>

        <div className={styles.social}>
          <a href="https://www.instagram.com/cesario_miguel15/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <i className='bx bxl-instagram-square'></i>
          </a>         
          <a href="https://www.linkedin.com/in/clesio-carvalho/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Carvalho2019" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className='bx bxl-github'></i></a>
          <a href="https://dribbble.com/laudio" target="_blank" rel="noreferrer" aria-label="Dribbble">
            <i className='bx bxl-dribbble'></i></a>
        </div>
       
      </div>      
     
    </section >
  )
}