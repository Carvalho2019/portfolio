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
            I have years of experience and many clients are happy with the projects 
            carried out. I'm a passionate software developer for code. 
            Programming It goes beyond designing buttons and websites, 
            having a passion for designing experiences and solutions that help people, 
            Leaning on the customers vision and understanding their needs. <br></br><br></br>
            At the moment, I am working as a freelancer and seeking knowledge 
            to complement and increase my skills and knowledge in the area of 
            Technology, participating in events and conducting bootcamps. 

            
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