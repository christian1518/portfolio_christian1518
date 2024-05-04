import { username } from '../../../data/user.js'
import profile_photo from '../../../assets/profile_photo.png'
import styles from './styles.module.css'

function BanerSection() {
  return (
    <section className={styles.section}>
      <div className={styles.div}>
        <span className={styles.span}>{username}</span>
        <h1 className={styles.h1}>
          Olá! Sou Christian Rodrigues.
          Bem vindo ao meu portfólio
        </h1>
        <p className={styles.p} >Desenvolvedor Web, apaixonado por transformar linhas de código em experiências digitais envolventes e funcionais que ressoam na era tecnológica."</p>
      </div>
      <img className={styles.img} src={profile_photo} alt='imagem de Christian Rodrigues' />
    </section>
  )
} 

export default BanerSection