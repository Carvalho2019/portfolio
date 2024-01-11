import { useState } from 'react'
import styles from './styles.module.scss'

interface ModalProps {
  isOpen: string;
  onRequestClose: () => void;
  contentModal: string;
  titleModal: string;
}

export function Modal({titleModal, contentModal, isOpen, onRequestClose }: ModalProps) {


  return (
    <div className={`${styles.modal} ${!isOpen && styles.activeModal}`}>
      <div className={styles.modalContent}>
        <i className='bx bx-x' onClick={onRequestClose}></i>
        <h3>{titleModal}</h3>
        <p> {contentModal}</p>
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
    )
}