import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import styles from './Advokaterne.module.scss'
import ebbe from '../../assets/img/ebbe.jpg'; // Opdater med den korrekte sti til dit billede
import karin from '../../assets/img/karin.jpg'; // Opdater med den korrekte sti til dit billede
import tonny from '../../assets/img/tonny.jpg'; // Opdater med den korrekte sti til dit billede
import ruth from '../../assets/img/ruth.jpg'; // Opdater med den korrekte sti til dit billede


export const Advokaterne =() =>{
    return(<>

        <ContentWrapper title="Home">
        <section className={styles.about}>
   

<section className={styles.articles}>
            <div><h2>Karin</h2><img src={karin} alt="Money" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sapiente unde illum repudiandae voluptatibus vero, explicabo suscipit reprehenderit veritatis dolorem natus autem rerum cumq <br /> <br />ue architecto necessitatibus omnis tempora, iure quae.</p></div>
            <div><h2>Ebbe</h2><img src={ebbe} alt="Money" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dignissimos quo distinctio ab suscipit teneturbr <br /><br /> ipsum alias? Dicta assumenda quae corporis error optio commodi, consequatur ea magni provident consectetur quasi!</p></div>
            <div><h2>Tonny</h2><img src={tonny} alt="Money" /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non animi doloribus voluptates quibusdam, illum perspiciatis minus nesciunt similique ve <br /><br /> ritatis cupiditate dignissimos deserunt unde explicabo eligendi, iste, amet obcaecati? Aliquam, eveniet?</p></div>
            <div><h2>Ruth</h2><img src={ruth} alt="Money" /><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore nostrum dolorum voluptatum ipsam ea l <br /><br /> aborum maxime dolorem blanditiis magnam dolor enim sint odio ratione nobis aliquam, voluptatibus error sunt. Pariatur!</p></div>
            </section>   
    </section>
           

        </ContentWrapper>
        </>
    )
}