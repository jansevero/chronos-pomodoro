import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink
        href='/about-pomodoro/'
        className=''
      > 
        Entenda como fuciona a técnica pomodoro
      </RouterLink>
      <RouterLink href='' className=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com React
      </RouterLink>
    </footer>
  );
}

