import React from 'react'
import styles from "./Banner.module.scss"
import banner from "./banner.png"


const Banner = () => {
  return (
    <div className={styles.principal__imagem}>
                    <h1>A galeria mais completa do espaço</h1>
                    <img src={banner} alt="A imagem da terra vista do espaço" />
                
    </div>
  )
}

export default Banner