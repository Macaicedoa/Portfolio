import React, { useState } from 'react'
import Lists from './Lists';
import Boton from './Boton';
import BurgerMenu from './BurgerMenu';

function Navbar({setIsContact,closeContact}) {

  const [menuState,setMenuState] = useState(false)
  const [secondMenuState,setSecondMenuState] = useState(false)

  const handleBurger = ()=>{
    setMenuState(!menuState)
    if(secondMenuState){
      setTimeout(()=>setSecondMenuState(false),100)
    }else{
      setSecondMenuState(true)
    }
  }

  const handleProjects = ()=>{
    closeContact()
    const aboutSection = document.getElementById('projects');
    const aboutPos = aboutSection.offsetTop;
    window.scrollTo({top: aboutPos-100, behavior: 'smooth'});
    setMenuState(!menuState)
    if(secondMenuState){
      setTimeout(()=>setSecondMenuState(false),100)
    }else{
      setSecondMenuState(true)
    }

  }

  const handleContact = ()=>{
    setIsContact()
    setMenuState(!menuState)
    if(secondMenuState){
      setTimeout(()=>setSecondMenuState(false),100)
    }else{
      setSecondMenuState(true)
    }
  }

  const handleHome = ()=>{
    closeContact()
    window.scrollTo({top: 0, behavior: 'smooth'});
    setMenuState(!menuState)
    if(secondMenuState){
      setTimeout(()=>setSecondMenuState(false),100)
    }else{
      setSecondMenuState(true)
    }
  }

  const sections = [<p onClick={()=>handleHome()}>Home</p>,<p onClick={()=>handleProjects()}>Projects</p>,<p onClick={()=>handleContact()}>Contact</p>,<Boton className={"burger-menu"} text={<BurgerMenu state={!menuState}/>} callback={()=>handleBurger()}/>];

  return (
    <header className='navbar'>
        <Lists array={sections} className={"first-list-nav"}/>
        {secondMenuState&&<Lists array={sections.slice(0,sections.length-1)} className={menuState?"second-list-nav":"second-list-nav nav-close"}/>}
    </header>
  )
}

export default Navbar