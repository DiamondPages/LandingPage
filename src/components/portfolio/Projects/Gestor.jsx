import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.sass'
import gestor1 from '../../../assets/portfolioPages/gestor1.png'
import gestor2 from '../../../assets/portfolioPages/gestor2.png'

const Gestor = () => {
  return (
    <div className={styles.projectContainer}>

        <Image style={{animationDuration: '15s'}} width={500} className={styles.mobile} quality={50} src={gestor2} alt=''/>
        <Image style={{animationDuration: '15s'}} width={500} className={styles.desktop}  quality={50} src={gestor1} alt=''/>

    </div>
  )
}

export default Gestor