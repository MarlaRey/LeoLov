import styles from './Footer.module.scss'
import facebook from '../../assets/img/icons/facebook.png'; 
import linkedin from '../../assets/img/icons/linkedIn.png'; 


export const Footer = () => {
 return(
           <footer>
    
           <section className={styles.articles}>
            <div><h2>Adresse</h2><p>Find os her:</p> <p>Vestervænget 232, 30.sal <br /> 6574 Øster Nørup <br /> Danmark</p></div>
            <div><h2>Kontakt</h2><p>Kontakt os her:</p> <p>email@email.dk <br /> Tlf: 928928928</p></div>
            <div><h2>Politik</h2><p>Vores politikker:</p> <p>Privatlivspolitik<br /> Cookiepolitik<br /> Generelle betingelser</p></div>
            <div><h2>Sociale medier</h2><div className={styles.img}><img src={facebook} alt="Facebook" /><img src={linkedin} alt="LinkedIn" /></div></div>
           </section>

           </footer>
        
    )
}