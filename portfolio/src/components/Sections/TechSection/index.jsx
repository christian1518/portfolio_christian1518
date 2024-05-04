import CardTech from '../../List/CardTech'
import { technologies } from '../../../data/technologies.js'
import styles from './styles.module.css'

function TechSection() {
  const [tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9, tech10] = technologies

  return (
    <section id="stack" className={styles.section}>
      <h2>Tecnologias</h2>
      <ul className={styles.listCard}>
        <CardTech {... tech1}/>
        <CardTech {... tech2}/>
        <CardTech {... tech3}/>
        <CardTech {... tech4}/>
        <CardTech {... tech5}/>
        <CardTech {... tech6}/>
        <CardTech {... tech7}/>
        <CardTech {... tech8}/>
        <CardTech {... tech9}/>
        <CardTech {... tech10}/>
      </ul>
    </section>
  )
} 

export default TechSection