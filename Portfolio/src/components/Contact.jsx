import { useRef, useState } from 'react'
import styles from '../styles/Contact.module.css'
import Boton from './Boton'
import CloseIcon from './CloseIcon'
import Inputs from './Inputs'
import TextMessage from './TextMessage'
import emailjs from '@emailjs/browser';
import  ReCAPTCHA  from "react-google-recaptcha"
import EmailSent from './EmailSent'
import Loading from './Loading'

function Contact({setIsContact}) {

    const [newUserData,setNewUserData] = useState({
        user_name: "",
        user_email: "",
        subject: "",
        message: "",
      })
    const [token,setToken] = useState(null)
    const [emailSent, setEmailSent] = useState(false)
    const [loading,setLoading] = useState(false)

    const [classCaptcha,setClassCaptcha] = useState(styles.captchaContainer)
        
    const form = useRef();
    const captchaRef = useRef(null);

    function handleUserData(event) {
      const nameEvent = event.target.name
          setNewUserData((prev)=>{return ({...prev,[nameEvent]:event.target.value})})
    }

    const sendEmail = (e) => {
        e.preventDefault();

        setLoading(true)

        if(newUserData.user_email.match("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$")!=null){
          setToken(captchaRef.current.getValue());
          
          if(captchaRef.current.getValue()){
            const ServiceID = `${import.meta.env.VITE_SERVICE_ID}`;
            const templateID = `${import.meta.env.VITE_TEMPLATE_ID}`;
            const publicKEY = `${import.meta.env.VITE_PUBLIC_KEY}`;

            emailjs
                .sendForm(ServiceID, templateID, form.current, {
                publicKey: publicKEY,
                })
                .then(
                () => {
                  setLoading(false)
                  setEmailSent(true)
                },
                (error) => {
                    console.log("FAILED...", error.text);
                }
                );
            
            captchaRef.current.reset();

            setNewUserData({
              user_name: "",
              user_email: "",
              subject: "",
              message: "",
            });

          }else{
            setClassCaptcha(styles.captchaContainerNotMarked);
            setToken(null);
          }
      }
               
    };
    

  return (
    <section className={styles.contactOverlay} onClick={()=>{setIsContact()}}>
        <div className={styles.contactContainer} onClick={(event)=>event.stopPropagation()}>
        <div>
            <h3>Talk to Me!</h3>
            <Boton className={styles.closeButton} text={<CloseIcon/>} callback={()=>{setIsContact()}} isDisabled={false}/>
          </div>
          {(!emailSent&&!loading)&&<form onSubmit={sendEmail} ref={form}>
              <Inputs labelText={"Your Name:"} name={"user_name"} type="text" dataInput={newUserData.user_name} handler={handleUserData} placeholder=""/>
              <Inputs labelText={"Email:"} name={"user_email"} type="email" dataInput={newUserData.user_email} handler={handleUserData} placeholder="user@example.com" pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"/>
              <Inputs labelText={"Mail Subject:"} name={"subject"} type="text" dataInput={newUserData.subject} handler={handleUserData}/>
              <TextMessage labelText={"Your message:"} name={"message"} type="text" dataInput={newUserData.message} handler={handleUserData}/>
              <div className={classCaptcha}><ReCAPTCHA sitekey={import.meta.env.VITE_CAPTCHA_SITE_KEY} ref={captchaRef} theme='dark' id='recaptcha'/></div>
              <Boton type="submit" className={styles.boton} text="Send" isDisabled={!newUserData.message||!newUserData.user_email}/>
          </form>}
          {(loading&&!emailSent)&&<Loading/>}
          {(emailSent&&!loading)&& <EmailSent/>}
        </div>
    </section>
  )
}

export default Contact