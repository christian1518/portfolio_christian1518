import styles from './styles.module.css'

function AboutMeSection() {
  return (
    <section id="sobre" className={styles.section}>
      <h2>Sobre mim</h2>
      <p className={styles.p}>
        Um desenvolvedor full stack apaixonado por tecnologia.
        
        Estou sempre me desafiando com novos projetos e buscando feedback na comunidade de programação.
        
        Além de compartilhar meus conhecimentos.
        Sou fã de jogos, filmes e esportes.
      </p>
    </section>
  )
} 

export default AboutMeSection