import React from 'react'
import styles from './Mercado.module.css'
import { FiShield, FiFileText, FiClock } from 'react-icons/fi'

export default function Mercado() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Cabeçalho da Seção */}
        <div className={styles.headerSection}>
          <div className={styles.badge}>SALUSCORE</div>
          
          <h1 className={styles.title}>
            Onde queremos <span className={styles.highlightBlue}>atuar?</span>
          </h1>
          
          <p className={styles.description}>
            A <span className={styles.brandName}>SalusCore</span> foca em um mercado em que a falta de informação gera riscos e barreiras no dia a dia. Nosso objetivo é criar aplicações que promovam segurança, confiança, praticidade e acessibilidade. Ouvimos pessoas com perfis bem diferentes, e um padrão se repetiu sem que a gente perguntasse diretamente:
          </p>
        </div>

        {/* Grade de Cards */}
        <div className={styles.cardsGrid}>
          
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiShield />
            </div>
            <h3 className={styles.cardTitle}>Segurança acima de tudo</h3>
            <p className={styles.cardText}>
              Em 4 de 4 entrevistas, o sentimento mais desejado ao usar um sistema de saúde foi o mesmo: confiança e segurança.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiFileText />
            </div>
            <h3 className={styles.cardTitle}>Informação existe, mas não chega</h3>
            <p className={styles.cardText}>
              Em rótulos de alimentos, a lei já exige transparência, mas termos técnicos e letras pequenas tornam a informação inacessível na prática.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <FiClock />
            </div>
            <h3 className={styles.cardTitle}>Processos ainda manuais</h3>
            <p className={styles.cardText}>
              Do profissional de saúde ao consumidor final: conferir informação, um item de cada vez, ainda consome tempo de quem cuida da saúde.
            </p>
          </div>

        </div>

      </div>
    </div>
  )
}