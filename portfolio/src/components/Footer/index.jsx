import gitHubIcon from '../../assets/github-icon.png'
import whatsappIcon from '../../assets/whatsapp-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import {user} from '../../data/user.js'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.div}>
        <h2>Contato</h2>
        <nav className={styles.nav}>
          <a href=""></a><span><img src={whatsappIcon} alt='ícone de contato do whatsapp' /></span>
          <a href="https://www.linkedin.com/in/christianrodrigues20/" target='blanck'><span><img src={linkedinIcon} alt='ícone de contato do linkedin' /></span></a>
          <a href="https://github.com/christian1518" target='blanck'><span><img src={gitHubIcon} alt='ícone de contato do github' /></span></a>
        </nav>
      </div>

      <p className={styles.p}>{user} </p>
    </footer>
  )
}

export default Footer