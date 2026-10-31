import React from 'react'
import styles from './Projeto.module.css'
import { FiArrowRight } from 'react-icons/fi'
import phonesImg from '../../assets/rotuscan-phones.png'

export default function Projeto() {
  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        
        {/* Lado Esquerdo: Textos */}
        <div className={styles.leftColumn}>
          <div className={styles.badge}>NOSSO PROJETO</div>
          
          <h1 className={styles.title}>
            RotuScan
          </h1>
          
          <h2 className={styles.subtitle}>
            Sua segurança <span className={styles.highlightDark}>no carrinho de compras.</span>
          </h2>
          
          <p className={styles.description}>
            O <span className={styles.boldText}>RotuScan</span> foi criado para ajudar pessoas com restrições alimentares a fazer escolhas mais seguras.
            <br /><br />
            Através da leitura dos rótulos, o sistema identifica substâncias como <span className={styles.highlightText}>glúten, lactose e amendoim</span>, além de sugerir produtos alternativos e receitas adequadas.
            <br /><br />
            A proposta é tornar o dia a dia mais simples, acessível e seguro, unindo tecnologia e bem-estar.
          </p>

          <button className={styles.ctaButton}>
            Conheça o RotuScan <FiArrowRight />
          </button>
        </div>

        {/* Lado Direito: Imagem dos celulares ocupando o espaço */}
        <div className={styles.rightColumn}>
          <img 
            src={phonesImg} 
            alt="Aplicativo RotuScan em múltiplos dispositivos" 
            className={styles.phonesImage} 
          />
        </div>

      </div>

      {/* Rodapé de Etapas da Página */}
      <div className={styles.footerSteps}>
        <span>ESCANEIE</span>
        <span className={styles.dot}>•</span>
        <span>DESCUBRA</span>
        <span className={styles.dot}>•</span>
        <span>ESCOLHA</span>
      </div>
    </div>
  )
}