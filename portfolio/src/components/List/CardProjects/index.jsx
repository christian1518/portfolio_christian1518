import styles from './styles.module.css'
import gitIcon from '../../../assets/git-icon.png'

function CardProjects({description, name, repository, image, link_app}) {
  return (
  <li className={styles.card}>
    <img className={styles.projectImg} src={image} alt="imagem da aplicação do projeto" />
    <div className={styles.div}>
    <h3>{name}</h3>
    <img src={gitIcon} alt='ìcone da tecnologia github' />
    </div>
    <div className={styles.divNav}>
      <p className={styles.p}>{description}</p>
      <nav className={styles.nav}>
        <a className={styles.a} href={repository} target='blank'>Repositório</a>
        <a className={styles.a} href={link_app} target='blank'>Aplicação</a>
      </nav>
    </div>
  </li>
  )
}

export default CardProjects