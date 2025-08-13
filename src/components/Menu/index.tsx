import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';
import styles from './styles.module.css';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
    
    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    })
    
    document.documentElement.setAttribute('data-theme', theme);
  }

  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink} href="#" aria-label='Ir para a Home' title='Ir para a Home'>
        <HouseIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink} href="#" aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={(event) => toggleTheme(event)}
      >
        <SunIcon />
      </a>
    </nav>
  );
}

