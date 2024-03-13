import styles from './styles.module.css'
import gitIcon from '../../../assets/git-icon.png'

function CardProjects({description, name, repository}) {
  return (
  <li className={styles.card}>
    <div className={styles.div}>
    <h3>{name}</h3>
    <img src={gitIcon} alt='ìcone da tecnologia github' />
    </div>
    <p className={styles.p}>{description}</p>
    <a href={repository} target='blank'><span className={styles.span}>Repository</span></a>
  </li>
  )
}

export default CardProjects