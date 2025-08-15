import type { HomeProps } from '../../pages/Home';
import styles from './styles.module.css';

export function Countdown({ state }: HomeProps) {
  return <div className={styles.container}>00:00</div>;
}

