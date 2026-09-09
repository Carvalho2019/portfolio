import styled from './styles.module.scss'
import { useState, useEffect } from 'react'

export function Header() {
  const [confirme, setConfirme] = useState('home')
  const [icon, setIcon] = useState('bxs-moon')
  const [theme, setTheme] = useState('');
  
  //body.classList.toggle("light");
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      setIcon('bxs-moon')
    } else {
      setTheme('light');
      setIcon('bxs-sun')
    }
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme')
    if (savedTheme === 'light') {
      setTheme('light')
      setIcon('bxs-sun')
    }
  }, [])

  useEffect(() => {
    document.body.className = theme
    if (theme) window.localStorage.setItem('portfolio-theme', theme)
  }, [theme]);

  return (
    <header className={styled.headerContainer} id='header'>
      <nav className={styled.navContainer}>
        <a href="#home" className={styled.logo} aria-label="Clésio Carvalho - início">CC</a>
        <div className={styled.navMenu}>
          <ul>
            <li>
              <a href="#home" aria-label="Início" onClick={() => setConfirme('home')} className={`${confirme === 'home' && styled.active}`}>
                <i className='bx bxs-home'></i>
              </a>
            </li>
            <li>
              <a href="#about" aria-label="Sobre mim" onClick={() => setConfirme('about')} className={`${confirme === 'about' && styled.active}`}>
                <i className='bx bxs-user'></i>
              </a>
            </li>
            {/*<li>
              <a href="#skills" onClick={() => setConfirme('skills')} className={`${confirme === 'skills' && styled.active}`}>
                <i className='bx bxs-book'></i>
              </a>
            </li>*/ }
            <li>
              <a href="#work" aria-label="Projetos" onClick={() => setConfirme('work')} className={`${confirme === 'work' && styled.active}`}>
                <i className='bx bxs-briefcase-alt-2'></i>
              </a>
            </li>
            <li>
              <a href="#contact" aria-label="Contacto" onClick={() => setConfirme('contact')} className={`${confirme === 'contact' && styled.active}`}>
                <i className='bx bxs-message-square-detail'></i>
              </a>
            </li>
          </ul>
        </div>
        <button onClick={toggleTheme} className={`bx ${icon} ${styled.changeTheme}`} id='theme-button' aria-label="Alternar tema" type="button"></button>
      </nav>
    </header>
  )
}