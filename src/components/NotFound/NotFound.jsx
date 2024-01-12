import styles from './NotFound.module.scss'
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"


export const NotFound = () => {
  return (
    <>
 
        <ContentWrapper title="Not Found">
    <div className={styles.wrapper}>
      <h1>404 </h1>
      <p>Beklager, men det du prøver her, fører ingen vegne hen...</p>
    </div>
    </ContentWrapper>
        </>
  );
};
