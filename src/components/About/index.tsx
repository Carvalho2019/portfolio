import Image from 'next/image'
import styles from './styles.module.scss'
import imgAbout from './../../assets/about.jpeg'


export function About() {
  return (
    <section className={styles.about} id="about">
      <span> My intro</span>
      <h2>software developer freelancer</h2>
      <div className={styles.grid}>
        <div className={styles.data}>
          <div className={styles.info}>
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

            Art and technology have always fascinated me and Ive never been afraid
            to just jump in and give it a try, whether its Paint, Photoshop or CSS. 
            Programming It goes beyond designing buttons and websites, having a passion 
            for designing experiences and solutions that help people, Leaning on the 
            customers vision and understanding their needs, finding the right problems 
            to solve, delivering solutions as quickly as possible, learning from them.
            It resonates so deeply with me because I have no desire to do beautiful things 
            just
          </p>

          <a download="" href='./../../assets/CurriculumVitaeGeral.pdf' className='button'>Download My Resume</a>
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