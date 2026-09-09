import { useState } from 'react'
import styles from './styles.module.scss'
import { Modal } from '../Modal'

export function Services() {
  const [openService, setOpenService] = useState<string | null>(null)

  return (
    <section id='services' className={styles.services}>
      <span>
        Serviços
      </span>
      <h2>Como posso ajudar</h2>
      <div className={styles.grid}>
      <div className={styles.card}>
          <h3>Desenvolvimento <br /> web</h3>
          <button type="button" onClick={() => setOpenService('web')}>Ver mais <i className='bx bx-right-arrow-alt'></i></button>

          <Modal
            titleModal='Web Developers'
            contentModal='Service with more than 3 years of experience Providing quality work to clients and companies'
            isOpen={openService === 'web'}
            onRequestClose={() => setOpenService(null)}
          />

        </div>

        <div className={styles.card}>
          <h3>Design de <br /> interfaces</h3>
          <button type="button" onClick={() => setOpenService('design')}>Ver mais <i className='bx bx-right-arrow-alt'></i></button>

          <Modal
            titleModal='Web Designers'
            contentModal='Service with more than 3 years of experience Providing quality work to clients and companies'
            isOpen={openService === 'design'}
            onRequestClose={() => setOpenService(null)}
          />

        </div>
       
        <div className={styles.card}>
          <h3>UI / UX <br /> estratégico</h3>
          <button type="button" onClick={() => setOpenService('ux')}>Ver mais <i className='bx bx-right-arrow-alt'></i></button>

          <Modal
            titleModal='Ui / Ux Interface'
            contentModal='Beautiful and elegant designs with interfaces that are intuitive, efficient and pleasant to use for the user'
            isOpen={openService === 'ux'}
            onRequestClose={() => setOpenService(null)} />
        </div>
         {/*
        <div className={styles.card}>
          <h3> Visual <br /> Designer </h3>
          <span>
            See more <i className='bx bx-right-arrow-alt'></i>
          </span>

          
          <div className={styles.modal}>
            <div className={styles.modalContent}>
              <i className='bx bx-x'></i>
              <h3>Visual Designer</h3>
              <p> Service with more than 3 years of experience Providing quality work to clients and companies </p>
              <ul>
                <li> 
                  <i className='bx bx-check'></i> 
                  <p> I develop the user interface </p> 
                </li>
                <li> 
                  <i className='bx bx-check'></i> 
                  <p> web page development </p> 
                </li>
                <li> 
                  <i className='bx bx-check'></i> 
                  <p> I created ux element interactions. </p> 
                </li>
                <li> 
                  <i className='bx bx-check'></i> 
                  <p> I position your company brand </p> 
                </li>
                <li> 
                  <i className='bx bx-check'></i> 
                  <p> Design  and mockups of products for companies. </p> 
                </li>
              </ul>
            </div>
          </div>
        </div>
        */}
      </div>
    </section>
  )
}