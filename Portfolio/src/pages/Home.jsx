import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/Intro'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


function Home() {

  const [isContact, setIsContact] = useState(false)
  return (
    <>
        <Navbar setIsContact={()=>setIsContact(true)} closeContact={()=>setIsContact(false)}/>
        {<Intro setIsContact={()=>setIsContact(true)}/>}
        {<About/>}
        {<Skills/>}
        {<Projects/>}
        {isContact&& <Contact setIsContact={()=>setIsContact(false)}/>}
        <Footer setIsContact={()=>setIsContact(true)}/>
    </>
  )
}

export default Home