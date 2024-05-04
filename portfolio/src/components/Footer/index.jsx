import {user} from '../../data/user.js'
import styles from './styles.module.css'

function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.div}>
        <h2>Contato</h2>
        <nav className={styles.nav}>
         <a className={styles.a}
            href="https://www.linkedin.com/in/christianrodrigues20/"
            title="Ir para o LinkedIn"
            target="_blank"
          >
            <i  class="fab fa-linkedin-in"></i>
          </a>

         <a className={styles.a}
            href="https://wa.me/5571997258714"
            title="Enviar Mensagem no WhatsApp"
            target="_blank"
          >
            <i class="fab fa-whatsapp"></i>
          </a>

          <a className={styles.a}
            href="https://github.com/christian1518"
            title="Ir para o GitHub"
            target="_blank"
          >
            <i class="fab fa-github"></i>
          </a>

          <a className={styles.a}
            href="https://www.instagram.com/chrisr.rodrigues"
            title="Ir para o Instagram"
            target="_blank"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a className={styles.a}
            href="mailto:crsantanarj@hotmail.com"
            title="Ir para email"
            target="_blank"
          >
            <i class="far fa-envelope"></i>
          </a>
        </nav>
      </div>
      <p className={styles.p}>{user} </p>
    </footer>
  )
}

export default Footer