import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentModal: string
  titleModal: string
}

const closeIcon = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const checkIcon = (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export function Modal({ titleModal, contentModal, isOpen, onRequestClose }: ModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null)
  const modalContent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    closeButton.current?.focus()
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onRequestClose()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isOpen, onRequestClose])

  if (!isOpen) return null

  return (
    <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={onRequestClose}>
      <div
        ref={modalContent}
        className={styles.modalContent}
        onMouseDown={event => event.stopPropagation()}
      >
        <button
          ref={closeButton}
          type="button"
          className={styles.closeBtn}
          onClick={onRequestClose}
          aria-label="Close modal"
        >
          {closeIcon}
        </button>
        <h3 id="modal-title">{titleModal}</h3>
        <p>{contentModal}</p>
        <ul role="list">
          <li>
            {checkIcon}
            <p>I develop the user interface</p>
          </li>
          <li>
            {checkIcon}
            <p>Web page development</p>
          </li>
          <li>
            {checkIcon}
            <p>I created UX element interactions</p>
          </li>
          <li>
            {checkIcon}
            <p>I position your company brand</p>
          </li>
          <li>
            {checkIcon}
            <p>Design and mockups of products for companies</p>
          </li>
        </ul>
      </div>
    </div>
  )
}