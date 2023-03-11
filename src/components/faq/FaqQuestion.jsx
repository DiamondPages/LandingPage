'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './FaqQuestion.module.sass'

const FaqQuestion = ({Question,Answer,Answer2,Answer3}) => {
    const [showAnswer,setShowAnswer] = useState(false)
    const answerRef = useRef()
    const [height,setHeight] = useState(32)

    useEffect(() => {
        setHeight(answerRef.current.clientHeight)
    }, []);

  return (
    <div        
        onClick={()=>setShowAnswer(!showAnswer)}
        className={styles.faqquestion}
        style={showAnswer? {marginBottom: 0} : {marginBottom: 0}}
        >
        
        <span>{Question} 
        
            <svg class="svg-icon" style={
                showAnswer ? {rotate: '-90deg'} : {rotate: '0deg'}
                } viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M946.494 269.783c19.445 19.445 19.445 51.265 0 70.711L547.355 739.632c-19.445 19.445-51.265 19.445-70.711 0L77.506 340.494c-19.445-19.445-19.445-51.265 0-70.711"  /></svg>
        </span>


        <p 
        ref={answerRef}
        style={showAnswer ? {opacity: 1, marginBottom: 0} : {opacity:0, marginBottom: -height}}>{Answer} {Answer2 && (<><br/><br/> {Answer2}</>)} {Answer3 && (<><br/><br/> {Answer3}</>)}</p>
        

    </div>
  )
}

export default FaqQuestion