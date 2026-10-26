import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import styles from './App.module.css'

import Home from './pages/Home/Home'
import Sobre from './pages/Sobre/Sobre'
import Mercado from './pages/Mercado/Mercado'
import Projeto from './pages/Projeto/Projeto'
import Equipe from './pages/Equipe/Equipe'

export default function App() {
  return (
    <div className={styles.mainWrapper}>
      {/* Elementos decorativos de fundo */}
      <div className={styles.bgSquare1}></div>
      <div className={styles.bgSquare2}></div>
      <div className={styles.bgSquare3}></div>
      <div className={styles.bgSquare4}></div>

      <BrowserRouter>
        {/* O Header DENTRO do BrowserRouter para os Links funcionarem */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/mercado" element={<Mercado />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/equipe" element={<Equipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}