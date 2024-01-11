import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import styles from './Home.module.scss'
import money from '../../assets/img/money.png'; // Opdater med den korrekte sti til dit billede
import buildings from '../../assets/img/buildings.png'; // Opdater med den korrekte sti til dit billede

export const Home =() =>{
    return(<>

        <ContentWrapper title="Home">
           <section className={styles.articles}>
            <div><h2>Familieret</h2><p>Familieret er en ret alle har. Har du en familie har du sikkert ret til familieret. Medmindre du altid er den der tror du har ret. Så kan vi desværre ikke hjælpe dig.</p></div>
            <div><h2>Ejendomsret</h2><p>Har du købt et hus og fortrudt eller er du blevet svindlet? Fortvivl ej. Vi kan hjælpe dig med at komme af med huset, eller eventuelt sagsøge vedkommende der solgte dig det.</p></div>
            <div><h2>Konkurs</h2><p>Er du gået konkurs ville vi rigtig gerne hjælpe, men det kan vi desværre ikke. Vi er alle advokater med fede biler her så har du ingen penge får du ingen hjælp</p></div>
            <div><h2>Selskabsret</h2><p>Selskabsret. Ved du heller aldrig hvilken ret du skal servere til et stort selskab? Heller ikke os. Heldigvis har vi en mand i udlandet der ved en masse om dette så henvend dig i dag.</p></div>
           </section>
           <section className={styles.intetproblem}>
            <img src={money} alt="Money" />
            <div><h2>INTET PROBLEM</h2><p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p><p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p></div>

           </section>
           <section className={styles.intetproblem}>
           
            <div><h2>HER BOR VI</h2><p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p><p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p></div>
            <img src={buildings} alt="Money" />
           </section>
        </ContentWrapper>
        </>
    )
}