
import styles from './styles.module.scss'


export function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div>
        <h1 className={styles.footerTitle}>Clésio Carvalho</h1>
        <ul className={styles.footerList}>
          <li> <a href='#home'>Voltar ao início <i className='bx bxs-up-arrow'></i></a></li>
        </ul>

        <ul className={styles.footerSocial}>
          <a className={styles.footerLink} href='https://www.github.com/carvalho2019' target='_blank' rel='noreferrer'> <i className='bx bxl-github'></i> </a>
          <a className={styles.footerLink} href='https://www.instagram.com/cesario_miguel15/' target='_blank' rel='noreferrer'> <i className='bx bxl-instagram'></i> </a>
          <a className={styles.footerLink} href='https://www.linkedin.com/in/clesio-carvalho/' target='_blank' rel='noreferrer'> <i className='bx bxl-linkedin'></i> </a>          
        </ul>

        <span className={styles.footerCopy}>
          &#169; {new Date().getFullYear()} Clésio Carvalho. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  )
}