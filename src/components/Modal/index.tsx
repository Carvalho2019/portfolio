import { useEffect, useRef } from 'react'
import styles from './styles.module.scss'

interface ModalProps {
  isOpen: boolean
  onRequestClose: () => void
  contentModal: string
  titleModal: string
}

export function Modal({ titleModal, contentModal, isOpen, onRequestClose }: ModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null)

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
    <div className={styles.modal} role="presentation" onMouseDown={onRequestClose}>
      <div className={styles.modalContent} role="dialog" aria-modal="true" aria-labelledby="service-title" onMouseDown={event => event.stopPropagation()}>
        <button ref={closeButton} type="button" className={styles.close} onClick={onRequestClose} aria-label="Fechar janela">
          <i className="bx bx-x"></i>
        </button>
        <h3 id="service-title">{titleModal}</h3>
        <p>{contentModal}</p>
        <ul>
          <li><i className="bx bx-check"></i><span>Desenvolvimento de interfaces responsivas</span></li>
          <li><i className="bx bx-check"></i><span>Experiências simples e intuitivas</span></li>
          <li><i className="bx bx-check"></i><span>Entrega alinhada aos objetivos do projeto</span></li>
        </ul>
      </div>
    </div>
  )
}
