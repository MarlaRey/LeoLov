import styles from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles.navWrapper}>
      <ul>
        <li><NavLink to="/"className={styles.NavLink}>Hjem</NavLink></li>
        <li><NavLink to="/advokaterne"className={styles.NavLink}>Advokaterne</NavLink></li>
        <li><NavLink to="/about"className={styles.NavLink}>Om LeoLov</NavLink></li>
        <li><NavLink to="/contact"className={styles.NavLink}>Kontakt</NavLink></li>
      </ul>
      <div className={styles.leoLovText}><span>Leo</span>-Lov</div>
    </nav>
  );
};
