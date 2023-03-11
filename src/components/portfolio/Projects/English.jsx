import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.sass'
import english1 from '../../../assets/portfolioPages/english1.png'
import english2 from '../../../assets/portfolioPages/english2.png'

const English = () => {
  return (
    <div className={styles.projectContainer}>

        <Image style={{animationDuration: '15s'}} width={500} className={styles.mobile} quality={50} src={english2} alt=''/>
        <Image style={{animationDuration: '15s'}} width={500} className={styles.desktop}  quality={50} src={english1} alt=''/>

    </div>
  )
}

export default English