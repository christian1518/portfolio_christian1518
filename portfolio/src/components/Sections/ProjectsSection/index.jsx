import CardProjects from '../../List/CardProjects'
import { projects } from '../../../data/projects.js'
import styles from './styles.module.css'

function ProjectsSection() {
  const [project1, project2, project3, project4, project5, project6, project7, project8] = projects

  return (
    <section id="project" className={styles.section}>
      <h2>Projetos</h2>
      <ul className={styles.listCard}>
        <CardProjects {... project1}/>
        <CardProjects {... project2}/>
        <CardProjects {... project3}/>
        <CardProjects {... project4}/>
        <CardProjects {... project5}/>
        <CardProjects {... project6}/>
        <CardProjects {... project7}/>
        <CardProjects {... project8}/>
      </ul>
    </section>
  )
} 

export default ProjectsSection