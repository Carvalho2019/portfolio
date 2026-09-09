import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'

export function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') || '')
    const email = String(data.get('email') || '')
    const message = String(data.get('message') || '')
    const subject = encodeURIComponent(`Contacto do portfolio - ${name}`)
    const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:taisomcarvalho15@gmail.com?subject=${subject}&body=${body}`
    setStatus('O seu cliente de email foi aberto para concluir o envio.')
    form.reset()
  }

  return (
    <section id="contact" className={styles.contact}>
      <span>Contacto</span>
      <h2>Vamos transformar uma ideia em produto</h2>
      <div className={styles.grid}>
        <div className={styles.contentContact}>
          <div className={styles.info}>
            <div className={styles.card}>
              <div className={styles.iconGroup}><i className="bx bx-mail-send"></i><h3>Email</h3></div>
              <span>taisomcarvalho15@gmail.com</span>
              <a href="mailto:taisomcarvalho15@gmail.com">Escrever <i className="bx bx-right-arrow-alt"></i></a>
            </div>
            <div className={styles.card}>
              <div className={styles.iconGroup}><i className="bx bxl-whatsapp"></i><h3>WhatsApp</h3></div>
              <span>+244 946 853 092</span>
              <a href="https://api.whatsapp.com/send?phone=244946853092&text=Olá%2C%20gostaria%20de%20saber%20mais." target="_blank" rel="noreferrer">Escrever <i className="bx bx-right-arrow-alt"></i></a>
            </div>
            <div className={styles.card}>
              <div className={styles.iconGroup}><i className="bx bxl-linkedin"></i><h3>LinkedIn</h3></div>
              <span>Perfil profissional</span>
              <a href="https://www.linkedin.com/in/clesio-carvalho/" target="_blank" rel="noreferrer">Visitar <i className="bx bx-right-arrow-alt"></i></a>
            </div>
          </div>
        </div>
        <div className={styles.contentContact}>
          <h3 className={styles.title}>Envie uma mensagem</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.field}><label htmlFor="name">Nome</label><input id="name" name="name" className={styles.input} type="text" placeholder="O seu nome" required /></div>
            <div className={styles.field}><label htmlFor="email">Email</label><input id="email" name="email" className={styles.input} type="email" placeholder="O seu email" required /></div>
            <div className={styles.field}><label htmlFor="message">Mensagem</label><textarea id="message" name="message" className={styles.input} placeholder="Fale sobre o seu projeto" required /></div>
            <button className="button" type="submit">Enviar mensagem</button>
            {status && <p role="status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
