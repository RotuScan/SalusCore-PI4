import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import styles from './Home.module.css'

export default function Home() {
  const slides = [
    { title: 'A', color: '#c82b2b' }, // Vermelho
    { title: 'B', color: '#1d6bf3' }, // Azul
    { title: 'C', color: '#2b2bc8' }, // Roxo
    { title: 'D', color: '#2bc87a' }, // Verde
    { title: 'E', color: '#c82ba4' }, // Rosa
  ]

  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <span className={styles.tagline}>IDEIAS · PESSOAS · IMPACTO</span>
        <h1 className={styles.title}>
          Tecnologia que <span className={styles.blueText}>Simplifica o dia a dia</span>
        </h1>
        <p className={styles.description}>
          Somos a SalusCore, uma equipe que transforma ideias e problemas reais em soluções digitais.
        </p>
      </div>

      <div className={styles.carouselSection}>
        <Carousel items={slides} />
      </div>
    </main>
  )
}