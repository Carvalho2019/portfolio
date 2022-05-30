import Image from 'next/image'
import styles from './styles.module.scss'
import imgAbout from './../../assets/image2.png'


export function About() {
  return (
    <section className={styles.about} id="about">
      <span> My intro</span>
      <h2>About Me</h2>
      <div className={styles.grid}>
        <Image
          src={imgAbout}
          alt="Picture of the author"
          layout="responsive"
        />
        <div className={styles.data}>
          <div className={styles.Info}>
            <div className={styles.box}>
              <i className='bx bx-award'></i>
              <h3>Experience</h3>
              <span>4 Years Working</span>
            </div>

            <div className={styles.box}>
              <i className='bx bx-briefcase-alt'></i>
              <h3>Completed</h3>
              <span>7+ Projects</span>
            </div>

            <div className={styles.box}>
              <i className='bx bx-support'></i>
              <h3>Support</h3>
              <span>Online 24/7</span>
            </div>
          </div>

          <p>
            Frontend developer, I create web pages with UI/UX user interface,
            I have years of experience and many clients are happy 
            with the projects carried out
          </p>

          <a href='#contact' className='button'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}