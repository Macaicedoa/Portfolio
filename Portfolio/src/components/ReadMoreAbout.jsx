import React, { useState } from 'react'
import styles from '../styles/ReadMoreAbout.module.css'
import Lists from './Lists'
import Boton from './Boton'

function ReadMoreAbout({hideRead}) {

    const [hide,setHide] = useState(false)

    const bulletPoint = <div className={styles.bulletPoint}></div>
    const bulletLine = <div className={styles.bulletLine}></div>

    const readMoreInfo = [
        `I graduated as Control Engineer from Universidad Nacional de Colombia.`,
        `I obtained funding for studying Control Systems Applied to Type 2 Diabetes Mellitus.`,
        `I went to Argentina for a research internship.`,
        `I got a Master's degree in Industrial Automation with a Merit grading.`,
        `I traveled overseas to continue my research as a Research Technician.`,
        `I found a more satisfying career path in Software Development.`,
        `I started learning the basics on my own and supplemented with a Bootcamp.`,
        `I have developed various applications and aim to develop more to become an expert.`,
        `I am complementing my education with testing and accessibility.`,
    ]

    const newReadMore = readMoreInfo.map(e=>
     {return (
            <>
                <div className={styles.bulletContainer}>
                   {bulletPoint}
                    {bulletLine} 
                </div>
                {<p>{e}</p>}
            </>
        )}
    )

    function HandleHideRead(){
        setHide(true)
        setTimeout(()=>{hideRead()},500)
    }

  return (
    <section className={!hide?styles.readMore:`${styles.readMore} ${styles.hideRead}`}>
        <Lists array={newReadMore}/>
        <Boton className={styles.boton} callback={()=>HandleHideRead()} text="Hide"/>
    </section>
  )
}

export default ReadMoreAbout