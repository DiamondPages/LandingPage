'use client'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

const Animation = ({children,transition}) => {

    useEffect(() => {
    Aos.init({duration: 1000});
    }, []);

  return (

    <div 
        style={{width: 'fit-content', height: 'fit-content'}}
        data-aos={transition} className={inter.className}>
        {children}
    </div>


  )
}

export default Animation