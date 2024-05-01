import { useState } from 'react'
import styles from '../styles/About.module.css'
import Boton from './Boton'
import DarkText from "./DarkText"
import ReadMoreAbout from './ReadMoreAbout'
import Star from './Star'

function About() {

  const [readMore, setReadMore] = useState(false)

  const handleReadMore = ()=>{
      setReadMore(true)
  }

  return (
    <>
    <section className={styles.aboutSection} id='about'>
        <div className={styles.aboutTitleContainer}>
          <Star/>
          <Star/>
          <DarkText text="About-me" className={styles.aboutMe}/>
          <Star/>
          <Star/>
        </div>
        <div className={styles.aboutText}>
            <p>Hello, I’m Michelle!</p>
            <p>I'm a STEM Woman and also a fullstack web developer based in Valencia, Spain. I can develop responsive websites from scratch and raise them into modern, atractive user-friendly web experiences.</p>
            <p>Transforming my creativity and knowledge into websites has been my passion for over a year. I have been working with different and innovative projects. I always strive to learn about the newest technologies and frameworks.</p>
            {!readMore&&<Boton text={"Read More"} className={styles.boton} callback={()=>handleReadMore()}/>}
        </div>
    </section>
    {readMore&&<ReadMoreAbout hideRead={()=>setReadMore(false)}/>}
    </>
  )
}

export default About