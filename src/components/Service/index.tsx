import { useState } from 'react'
import styles from './styles.module.scss'
import { Modal } from '../Modal'

export function Services() {
  const [isOpenDeveloper, setIsOpenDeveloper] = useState('')
  const [isOpenDesign, setIsOpenDesign] = useState('')
  const [isOpenTech, setIsOpenTech] = useState('')

  function openModalTech(event) {
    setIsOpenTech(event.target)
  }

  function openModalDesign(event) {
    setIsOpenDesign(event.target)
  }

  function openModalDeveloper(event) {
    setIsOpenDeveloper(event.target)
  }

  function onRequestClose() {  
    setIsOpenTech('')
    setIsOpenDesign('')
    setIsOpenDeveloper('')
  }

  return (
    <section id='services' className={styles.services}>
      <span>
        My Services
      </span>
      <h2>What I offer</h2>
      <div className={styles.grid}>
      <div className={styles.card}>
          <h3>Create <br /> System </h3>
          <span onClick={openModalTech}>
            See more <i className='bx bx-right-arrow-alt'></i>
          </span>

          <Modal
            titleModal='Create System'
            contentModal='Service with more than 3 years of experience Providing quality work to clients and companies'
            isOpen={isOpenTech}
            onRequestClose={onRequestClose}
          />

        </div>

        <div className={styles.card}>
          <h3>Product <br /> Designer </h3>
          <span onClick={openModalDesign}>
            See more <i className='bx bx-right-arrow-alt'></i>
          </span>

          <Modal
            titleModal='Product Designer'
            contentModal='Service with more than 3 years of experience Providing quality work to clients and companies'
            isOpen={isOpenDesign}
            onRequestClose={onRequestClose}
          />

        </div>
       
        <div className={styles.card}>
          <h3>Ui / Ux <br /> Designer</h3>
          <span onClick={openModalDeveloper}>
            See more <i className='bx bx-right-arrow-alt'></i>
          </span>

          <Modal
            titleModal='Ui / Ux Designer'
            contentModal='Service with more than 3 years of experience Providing quality work to clients and companies'
            isOpen={isOpenDeveloper}
            onRequestClose={onRequestClose} />
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