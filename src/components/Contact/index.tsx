
import styles from './styles.module.scss'


export function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <span>
      Talk to me
      </span>
      <h2>Enjoyed my work? Let’s work together</h2>
      <div className={styles.grid}>

        <div className={styles.contentContact}>
         {/* <h3 className={styles.title}></h3> */}
          <div className={styles.info}>
            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <i className='bx bx-mail-send'></i>
                <h3>Email</h3>
              </div>
              
              <span>taisomcarvalho15@gmail.com</span>
              <a rel='noreferrer' href='mailto:taisomcarvalho15@gmail.com' target='_blank'>
                Write Me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <i className='bx bxl-whatsapp'></i>
                <h3>Whatsapp</h3>
              </div>
              <span>+244 946 853 092</span>
              <a rel='noreferrer' href='https://api.whatsapp.com/send?phone=946853092&text=Hello, more information' target='_blank'>
                Write me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.iconGroup}>
                <i className='bx bxl-linkedin'></i>
                <h3>Linkedin</h3>
              </div>
              <span>  </span>
              <a href='#' target='_blank'>
                Write me <i className='bx bx-right-arrow-alt'></i>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.contentContact}>
          <h3 className={styles.title}>Write me your message</h3>
          <form>
            <div className={styles.field}>
              <label>Name</label>
              <input className={styles.input} type='text' placeholder='Write your name'/>
            </div>

            <div className={styles.field}>
              <label>Mail</label>
              <input className={styles.input} type='text' placeholder='Write your E-mail'/>
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea className={styles.input} placeholder='Write your project' ></textarea>
            </div>

            <button className='button'>Send Message</button>
          </form>
        </div>

      </div>
    </section>
  )
}