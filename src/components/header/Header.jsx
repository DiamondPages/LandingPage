import React from 'react'
import styles from '../header/Header.module.sass'
import logo from '../../assets/logo.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={`${styles.header} lightMode`}>
        <Image src={logo} alt='Logo' width={64}/>
        <span>Diamond Pages</span>
    </header>
  )
}

export default Header