import CardTech from '../../List/CardTech'
import { technologies } from '../../../data/technologies.js'
import styles from './styles.module.css'

function TechSection() {
  const [tech1, tech2, tech3, tech4] = technologies

  return (
    <section id="stack" className={styles.section}>
      <h2>Tecnologias</h2>
      <ul className={styles.listCard}>
        <CardTech {... tech1}/>
        <CardTech {... tech2}/>
        <CardTech {... tech3}/>
        <CardTech {... tech4}/>
      </ul>
    </section>
  )
} 

export default TechSection