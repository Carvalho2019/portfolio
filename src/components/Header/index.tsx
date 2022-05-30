import styled from './styles.module.scss'

export function Header() {
  return (
    <header className={styled.headerContainer} id='header'>
      <nav className={styled.navContainer}>
        <a href="#" className={styled.logo}>Clesio</a>
        <div className={styled.navMenu}>
          <ul>
            <li>
              <a href="#home" className={styled.active}>
                <i className='bx bx-home-alt'></i>
              </a>
            </li>
            <li>
              <a href="#about" >
                <i className='bx bx-user'></i>
              </a>
            </li>
            <li>
              <a href="#skills" >
                <i className='bx bx-book'></i>
              </a>
            </li>
            <li>
              <a href="#work" >
                <i className='bx bx-briefcase-alt-2'></i>
              </a>
            </li>
            <li>
              <a href="#contact" >
                <i className='bx bx-message-square-detail'></i>
              </a>
            </li>
          </ul>
        </div>
          <i className='bx bx-moon change-theme' id='theme-button'></i>
      </nav>
    </header>
  )
}