import styles from './NotFound.module.scss'


export const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <h1>404 </h1>
      <p>Beklager, men det du prøver her, fører ingen steder hen...</p>
    </div>
  );
};
