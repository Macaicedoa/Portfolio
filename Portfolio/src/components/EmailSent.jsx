import styles from '../styles/EmailSent.module.css'
import Star from './Star'

function EmailSent() {
  return (
    <div className={styles.emailSent}>
        <div className={styles.thankYou}>
           <Star/>
            <h3>
                Thank you!
            </h3>
            <Star/> 
        </div>
        <p>
        I'll write you back as soon as I can
        </p>
    </div>
  )
}

export default EmailSent