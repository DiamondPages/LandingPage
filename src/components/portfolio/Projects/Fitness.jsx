import Image from 'next/image'
import React from 'react'
import styles from '../Project.module.sass'
import fitness1 from '../../../assets/portfolioPages/fitness1.png'
import fitness2 from '../../../assets/portfolioPages/fitness2.png'

const Fitness = () => {
  return (
    <div className={styles.projectContainer}>

        <Image style={{animationDuration: '15s'}} width={500} className={styles.mobile} quality={50} src={fitness2} alt=''/>
        <Image style={{animationDuration: '15s'}} width={500} className={styles.desktop}  quality={50} src={fitness1} alt=''/>

    </div>
  )
}

export default Fitness