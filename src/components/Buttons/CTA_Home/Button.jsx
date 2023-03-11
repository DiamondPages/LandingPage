'use client'
import React from 'react'

const Button = ({children}) => {
  return (               
    <a 
        onClick={()=>gtag('event','decolar')}
        href='#prices'>
        {children}
    </a>
  )
}

export default Button