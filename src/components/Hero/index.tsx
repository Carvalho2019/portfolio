import Image from 'next/image'
import styles from './styles.module.scss'
//import pdfFile from './../../assets/CurriculumVitaeGeral.pdf';
import imgHero from './../../assets/image.png'

export function Hero() {
  return (
    <section className={styles.container} id="home">
      <div className={styles.grid}>
        <div className={styles.data}>
          <span>Hello, I´m</span>
          <h1>Clésio Carvalho</h1>
          <h3>Fullstack Developer</h3>

          <div>
            <a className='button button-ghost' download="" href='./../../assets/CurriculumVitaeGeral.pdf'>
              Download CV
            </a>
            <a className='button' href="#about">About me</a>
          </div>
        </div>
        <div className={styles.imageHero}>
          <Image
            src={imgHero}
            alt="Picture of the author"
            layout="responsive"
          />
        </div>

        <div className={styles.social}>
          <a href="https://www.linkedin.com/in/clesio-carvalho/">
            <i className='bx bxl-linkedin-square'></i>
          </a>
          <a href="https://github.com/Carvalho2019">
            <i className='bx bxl-github'></i></a>
          <a href="https://dribbble.com/laudio">
            <i className='bx bxl-dribbble'></i></a>
        </div>
        <a href="#about" className={styles.scroll}>
          <i className='bx bx-mouse'></i>
          <span> Scroll Down</span>
        </a>
      
    </div>
    </section >
  )
}