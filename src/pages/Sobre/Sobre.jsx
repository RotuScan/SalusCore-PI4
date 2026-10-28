import React from 'react'
import styles from './Sobre.module.css'
import { 
  FiAlertTriangle, 
  FiSun,           /* Usado como lâmpada/ideia */
  FiBox, 
  FiCheckCircle, 
  FiUsers, 
  FiZap, 
  FiTrendingUp, 
  FiArrowRight 
} from 'react-icons/fi'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Coluna da Esquerda: Conteúdos */}
        <div className={styles.textContent}>
          
          {/* Badge superior */}
          <div className={styles.badge}>Sobre nós</div>

          {/* Título Principal */}
          <h1 className={styles.title}>
            Quem é a <span className={styles.highlightBlue}>SalusCore?</span>
          </h1>

          {/* Descrição Principal */}
          <p className={styles.description}>
            Somos uma equipe formada por estudantes de tecnologia, que transforma ideias e problemas reais em <strong>soluções digitais simples, funcionais e relevantes.</strong>
          </p>

          {/* Fluxo de Etapas (Problema -> Ideia -> Protótipo -> Solução) */}
          <div className={styles.flowContainer}>
            
            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.redIcon}`}>
                <FiAlertTriangle />
              </div>
              <span className={styles.stepTitle}>Problema</span>
              <span className={styles.stepSub}>Entendemos a necessidade</span>
            </div>

            <FiArrowRight className={styles.arrowIcon} />

            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.purpleIcon}`}>
                <FiSun />
              </div>
              <span className={styles.stepTitle}>Ideia</span>
              <span className={styles.stepSub}>Transformamos em possibilidades</span>
            </div>

            <FiArrowRight className={styles.arrowIcon} />

            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.blueIcon}`}>
                <FiBox />
              </div>
              <span className={styles.stepTitle}>Protótipo</span>
              <span className={styles.stepSub}>Damos forma à solução</span>
            </div>

            <FiArrowRight className={styles.arrowIcon} />

            <div className={styles.stepCard}>
              <div className={`${styles.iconBox} ${styles.greenIcon}`}>
                <FiCheckCircle />
              </div>
              <span className={styles.stepTitle}>Solução</span>
              <span className={styles.stepSub}>Entregamos valor para quem usa</span>
            </div>

          </div>

          {/* Texto intermediário */}
          <p className={styles.secondaryText}>
            Da ideia ao protótipo, desenvolvemos produtos pensando em <strong>quem realmente vai utilizá-los.</strong>
          </p>

          {/* Pilares Inferiores */}
          <div className={styles.pillarsContainer}>
            
            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <FiUsers />
              </div>
              <div>
                <h3>Experiência</h3>
                <p>Aprendizado na prática</p>
              </div>
            </div>

            <div className={styles.pillarDivider} />

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <FiZap />
              </div>
              <div>
                <h3>Praticidade</h3>
                <p>Soluções que fazem sentido</p>
              </div>
            </div>

            <div className={styles.pillarDivider} />

            <div className={styles.pillarItem}>
              <div className={styles.pillarIcon}>
                <FiTrendingUp />
              </div>
              <div>
                <h3>Inovação</h3>
                <p>Sempre buscando o próximo nível</p>
              </div>
            </div>

          </div>

        </div>

        {/* Coluna da Direita: Imagem / Ilustração 3D */}
        <div className={styles.imageContent}>
          <img 
            src="/assets/saluscore-3d.png" 
            alt="SalusCore Ilustration 3D" 
            className={styles.heroImage}
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

      </div>

    </div>
  )
}