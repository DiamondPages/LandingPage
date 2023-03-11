import React from 'react'
import styles from './Content.module.sass'

const Content = ({children,style}) => {
  return (
    <div style={style} className={styles.content}>{children}</div>
  )
}

export default Content