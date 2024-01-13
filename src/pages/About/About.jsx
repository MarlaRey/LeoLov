import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import styles from './About.module.scss'

import money from '../../assets/img/money2.jpg'
import karin from '../../assets/img/karin.jpg'

export const About = () => {
    return (<>
        <ContentWrapper title="About">

            <section className={styles.intetproblem}>
                <img src={money} alt="Money" />
                <div><h2>VI ER SERIØSE FOLK</h2><p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p><p>Det er sådan vi har skabt en forretning der ikke kan andet end at vokse!</p></div>
                <div><h2>VI FØLGER MED TIDEN</h2><p>Leo-lov har altid været det bedste advokatfirma i verden. Der er simpelthen ingen der kan måle sig med os. Vi kan løse alle problemer så længe du har penge. Hvis du mod alt forventning skulle oplevel at støde på et retsligt problem som leo-lov ikke kan løse får du halvdelen af beløbet igen.</p></div>
                <img className={styles.karin} src={karin} alt="Vi følger med tiden" />
            </section>
        </ContentWrapper>
    </>)
}