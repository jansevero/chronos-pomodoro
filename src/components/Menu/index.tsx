import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme = localStorage.getItem('theme');
    return storageTheme ? storageTheme as AvailableThemes : 'dark';
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  }

  function toggleTheme(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink className={styles.menuLink} href="/history" aria-label='Ver Histórico' title='Ver Histórico'>
        <HistoryIcon />
      </RouterLink>
      <RouterLink className={styles.menuLink} href="/settings" aria-label='Configurações' title='Configurações'>
        <SettingsIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={(event) => toggleTheme(event)}
      >
        {nextThemeIcon[theme]}
      </RouterLink>
    </nav>
  );
}

