import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        {/* Ícone representando o logotipo em SVG */}
        <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
        <span className={styles.logoText}>SalusCore</span>
        <nav className={styles.nav}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/sobre" className={styles.navLink}>Sobre nós</Link>
          <Link to="/mercado" className={styles.navLink}>Mercado</Link>
          <Link to="/projeto" className={styles.navLink}>Projeto (RotuScan)</Link>
          <Link to="/equipe" className={styles.navLink}>Equipe</Link>
      </nav>
      </div>
    </header>
  )
}