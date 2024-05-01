import styles from '../styles/Footer.module.css'
import GithubIcon from './GithubIcon'
import LinkedInIcon from './LinkedInIcon'

function Footer({setIsContact}) {

  const handleHome = ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  const handleAbout = ()=>{
    const aboutSection = document.getElementById('about');
    const aboutPos = aboutSection.offsetTop;
    window.scrollTo({top: aboutPos-100, behavior: 'smooth'});
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInfo}>
        <p onClick={()=>handleHome()}>Michelle Caicedo - MichelleDev.com</p>
        <p onClick={()=>handleAbout()}>About</p>
        <p onClick={setIsContact}>Contact</p>
        <a href='../src/files/Michelle_Caicedo_CV_Eng.pdf' target='_blank'
                    rel='noopener noreferrer'>CV</a>
      </div> 
      <div className={styles.footerIcons}>
          <a href="https://github.com/Macaicedoa" target='_blank'><GithubIcon/></a>
          <a href="https://www.linkedin.com/in/michellecaicedoa/" target='_blank'><LinkedInIcon/></a>
      </div>
    </footer>
  )
}

export default Footer