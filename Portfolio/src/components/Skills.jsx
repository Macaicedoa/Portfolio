import styles from '../styles/Skills.module.css'
import Circles from './Squares';
import CirclesOrbit from './CirclesOrbit';
import DarkText from './DarkText';
import Lists from './Lists'
import SkillsCards from './SkillsCards';
import express from '../assets/express.png';
import js from '../assets/js.png';
import php from '../assets/php.png';
import html from '../assets/html.png';
import css from '../assets/css.png';
import sass from '../assets/sass.png';
import python from '../assets/python.png';
import react from '../assets/reactjs.png';
import vite from '../assets/vite.png';
import node from '../assets/node.png';
import jquery from '../assets/jquery.png';
import vscode from '../assets/vscode.png';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import postgresql from '../assets/postgresql.png';

function Skills() {

    const skillsInfo = [
        {
            title:"Languages",
            text: [<img key='js' src={`${js}`}/>,<img key='php' src={`${php}`}/>,<img key='html' src={`${html}`}/>,<img key='css' src={`${css}`}/>,<img key='sass' src={`${sass}`}/>,<img key='python' src={`${python}`}/>]
        },
        {
            title:"Frameworks & libraries",
            text: [<img key='react' src={`${react}`}/>,<img key='vite' src={`${vite}`}/>,<img key='express' src={`${express}`}/>,<img key='node' src={`${node}`}/>,<img key='jquery' src={`${jquery}`}/>]
        },
        {
            title:"Tools",
            text: [<img key='vscode' src={`${vscode}`}/>,<img key='figma' src={`${figma}`}/>,<img key='git' src={`${git}`}/>,<img key='github' src={`${github}`}/>]
        },
        {
            title:"Databases",
            text: [<img key='postgresql' src={`${postgresql}`}/>]
        }
    ];

    const skillsMapped = skillsInfo.map((skill)=><SkillsCards title={skill.title} text={skill.text} className={styles.skillCard}/>)


  return (
    <section className={styles.skillsSectionContainer}>
        <div>
            <DarkText text='Skills' className={styles.SkillsTitle}/>
        </div>
        <div className={styles.skillsSection}>
        <div className={styles.skillsImgIzq}>
                <CirclesOrbit/>
            </div> 
           <div className={styles.skillsCards}>
                <Lists array={skillsMapped} className={styles.skillList} keyName={'skillChild'}/>
            </div>
            <div className={styles.skillsImg}>
                <CirclesOrbit/>
            </div> 
        </div>
        
    </section>
  )
}

export default Skills