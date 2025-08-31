import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link
        to='/about-pomodoro/'
        className=''
      >
        Entenda como fuciona a técnica pomodoro
      </Link>
      <a href='' className=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com React
      </a>
    </footer>
  );
}

