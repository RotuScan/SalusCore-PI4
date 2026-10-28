import React from 'react'
import styles from './Equipe.module.css'
import { FiUser } from 'react-icons/fi'
import Footer from '../../components/Footer/Footer'

export default function Equipe() {
  const membros = [
    { nome: 'Arthur Albino', cargo: 'DEVOPS', cor: 'blue' },
    { nome: 'Endrew Lemos', cargo: 'UI / UX DESIGNER', cor: 'red' },
    { nome: 'Guilherme Bittencourt', cargo: 'BACK-END MOBILE', cor: 'blue' },
    { nome: 'Isaac Hideki', cargo: 'FRONT-END MOBILE', cor: 'red' },
    { nome: 'Noemi Tejada', cargo: 'FRONT-END WEB', cor: 'blue' },
  ]

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          
          {/* Cabeçalho */}
          <div className={styles.headerSection}>
            <div className={styles.badge}>NOSSA EQUIPE</div>
            <h1 className={styles.title}>
              Pessoas que fazem a <span className={styles.highlightBlue}>SalusCore</span> acontecer.
            </h1>
          </div>

          {/* Grade de Membros */}
          <div className={styles.teamGrid}>
            {membros.map((membro, index) => (
              <div key={index} className={styles.card}>
                <div className={`${styles.avatarBox} ${membro.cor === 'red' ? styles.cardRed : styles.cardBlue}`}>
                  <FiUser className={styles.avatarIcon} />
                </div>
                <div className={styles.cardInfo}>
                  <h3 className={styles.memberName}>{membro.nome}</h3>
                  <span className={`${styles.roleTag} ${membro.cor === 'red' ? styles.roleRed : styles.roleBlue}`}>
                    {membro.cargo}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

     
      <Footer />
    </>
  )
}