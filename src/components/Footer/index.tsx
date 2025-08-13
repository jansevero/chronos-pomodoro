import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='' className=''>Entenda como fuciona a técnica pomodoro</a>
      <a href='' className=''>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com React
      </a>
    </footer>
  );
}

