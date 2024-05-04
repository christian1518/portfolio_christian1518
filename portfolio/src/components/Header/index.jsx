import logo from '../../assets/portfolio.png'
import Button from '../Button'
import styles from './styles.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <img src={logo} className={styles.imgLogo} alt='logo escrita com a palavra portifólio, na cor branca' />
        
        <ul className={styles.listHeader}>
          <li><a className={styles.a} href="#sobre">Sobre</a></li>
          <li><a className={styles.a} href="#stack">Stack</a></li>
          <li><a className={styles.a} href="#project">Projetos</a></li>
        </ul>
      </nav>
      <a href="#contact"><Button text='Contato' /></a>
    </header>
  )
}

export default Header