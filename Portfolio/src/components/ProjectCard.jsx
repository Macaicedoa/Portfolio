import { useEffect, useState } from 'react'
import styles from '../styles/ProjectCard.module.css'
import Boton from "./Boton"
import Star from './Star'
import Next from './Next'
import Prev from './Prev'

function ProjectCard({objectData}) {

    const [indexImg,setIndexImg] = useState(0)
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(true)

    useEffect(()=>{
        if(indexImg>0&&indexImg<objectData.img.length-1){
            setPrev(true)
            setNext(true)
        }else if(indexImg==0){
            setPrev(false)
        }else{
            setNext(false)
        }

    },[indexImg])

    function handlePrev(){
        if(indexImg>=1){ 
            setIndexImg(indexImg-1)
        }        
    }

    function handleNext(){
        if(indexImg<objectData.img.length-1){
            setIndexImg(indexImg+1)
        }
    }

  return (
    <>
        <div className={styles.cardTitle}>
            <h3>{objectData.title}</h3>
            <Star/>
            <h3>{objectData.description}</h3>
        </div>
        <div className={styles.projectInfoMain}>       
            {objectData.features&&<p>{`${objectData.features}`}</p>}
            <p>{`${objectData.tools}`}</p>
            <p>{`${objectData.status}`}</p>
            <p>{`${objectData.contributions}`}</p>
            <div className={styles.projectButtons}>
                {objectData.url&&<Boton text={<a href={objectData.url} target='blank'>See it live!</a>} className={styles.boton}/>}
                {objectData.repository&&<Boton text={<a href={objectData.repository} target='blank'>See Repository</a>} className={styles.boton}/>}
                {objectData.figma&&<Boton text={<a href={objectData.figma} target='blank'>Go to Figma</a>} className={styles.boton}/>}
            </div>
        </div>
        <div className={styles.projectImgCont}>
            <Boton className={prev?styles.Prev:styles.PrevHidden} text={<Prev/>} callback={()=>handlePrev()}/>
            <div className={styles.projectImg}>
                <img className={indexImg==0?styles.SlideVisible:styles.SlideHidden} src={objectData.img[0]} alt={`Homepage image of ${objectData.title}`}  />
                <img className={indexImg==1?styles.SlideVisible:styles.SlideHidden} src={objectData.img[1]} alt={`Principal contribution image mockup of ${objectData.title}`}  />
                <img className={indexImg==2?styles.SlideVisible:styles.SlideHidden} src={objectData.img[2]} alt={`Secondary contribution image mockup of ${objectData.title}`}  /> 
            </div>
            <Boton className={next?styles.Next:styles.NextHidden} text={<Next/>} callback={()=>handleNext()}/>
        </div>
    </>
  )
}

export default ProjectCard