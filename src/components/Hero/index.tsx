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
          <h1>Hello, I´m <a>Clésio Carvalho</a></h1>
          <h3>Full-stack Developer, Specialize in building innovative using technologies</h3>

          <div className={styles.HomeButtons}>
            <a className='button' href="#contact">Get in touch</a>
            <a className='button button-ghost' download="" href='./../../assets/CurriculumVitaeGeral.pdf'>
              Download CV
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

        <a href="#about" className={styles.scroll}>
          <i className='bx bx-mouse'></i>
          <span> Scroll Down</span>
        </a>

        <div className={styles.social}>
          <a href="https://www.linkedin.com/cesario_miguel15/">
            <i className='bx bxl-instagram-square'></i>
          </a>         
          <a href="https://www.linkedin.com/in/clesio-carvalho/">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Carvalho2019">
            <i className='bx bxl-github'></i></a>
          <a href="https://dribbble.com/laudio">
            <i className='bx bxl-dribbble'></i></a>
        </div>
       
      </div>      
     
    </section >
  )
}