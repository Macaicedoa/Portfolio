import React, { useEffect, useState } from 'react'
import DarkText from './DarkText'
import Boton from './Boton'
import styles from '../styles/Intro.module.css'
import MichellePhoto from '../assets/IMG_20240113_155413-2_HQ.png'
import MichelleCV from '../files/Michelle_Caicedo_CV_Eng.pdf'

function Intro({setIsContact}) {

    const tString = 'Where the creativity meets technology and responsiveness goes with functionality'.split("");
    const [text,setText] = useState("")
    const [textIdx,setTextIndx] = useState(0)

    useEffect(()=>{
        if(textIdx<tString.length){
           setTimeout(()=>{
            setText(text+tString[textIdx])
            setTextIndx(textIdx+1)
            },40) 
        }
        
    },[text,textIdx])


  return (
    <section className={styles.sectionIntro}>
    <div className={styles.intro}>
        <div className={styles.introPhotoContainer}>
            <img src={MichellePhoto} alt="photo of Michelle" loading='lazy' /> 
        </div>
        <div className={styles.introTextContainer}>
            <div className={styles.introText}>
                {/* <RedText text='Welcome ' /> */}
                <DarkText text='to the portfolio of a ' className={styles.titleDark}/>
                {/* <RedText text='Fullstack Web Developer' /> */}
            </div>
        </div>
    </div>
    <div className={styles.bottomText}>
        <DarkText text={text} className={styles.introTextSmall}/>
        <div className={styles.buttonCirclesContainer}>
            <Boton text={"Contact Me!"} className={styles.boton} callback={setIsContact}/>
            <a href={MichelleCV} target='_blank'
                    rel='noopener noreferrer'><Boton text={"Download CV"} className={styles.boton}/></a>
        </div>  
    </div>
      
    </section>
  )
}

export default Intro