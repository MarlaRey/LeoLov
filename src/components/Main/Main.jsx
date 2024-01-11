import styles from './Main.module.scss'
import { List, array } from '../List/List'

const array2 = ['fun', 'fresh', 'freestyle']

export const Main = ({children}) => {
    return (
        <div className={styles.mainWrapper}>
          {children}
          

        </div>
      );
}