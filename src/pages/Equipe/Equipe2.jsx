import React from 'react'
import styles from './Equipe.module.css'
import Footer from '../../components/Footer/Footer'

// Importando corretamente da pasta src/assets/team/
import arthurImg from '../../assets/team/arthur.jpeg'
import endrewImg from '../../assets/team/endrew.jpeg'
import guilhermeImg from '../../assets/team/guilherme.jpeg'
import isaacImg from '../../assets/team/isaac.jpeg'
import noemiImg from '../../assets/team/noemi.jpeg'

export default function Equipe() {
  const membros = [
    { nome: 'Arthur Albino', cargo: 'DEVOPS', cor: 'blue', foto: arthurImg },
    { nome: 'Endrew Lemos', cargo: 'UI / UX DESIGNER', cor: 'red', foto: endrewImg },
    { nome: 'Guilherme Bittencourt', cargo: 'BACK-END MOBILE', cor: 'blue', foto: guilhermeImg },
    { nome: 'Isaac Hideki', cargo: 'FRONT-END MOBILE', cor: 'red', foto: isaacImg },
    { nome: 'Noemi Tejada', cargo: 'FRONT-END WEB', cor: 'blue', foto: noemiImg },
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
                  <img 
                    src={membro.foto} 
                    alt={`Foto de ${membro.nome}`} 
                    className={styles.memberPhoto} 
                  />
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