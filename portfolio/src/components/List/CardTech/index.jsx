import styles from './styles.module.css'

function CardTech({img, name}) {
  return (
  <li className={styles.card}>
    <img className={styles.image} src={img} alt={`ìcone da tecnologia ${name}`} />
    <span className={styles.span}>{name}</span>
  </li>
  )
}

export default CardTech