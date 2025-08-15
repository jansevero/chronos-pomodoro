import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext';

export function Countdown() {
  const { state } = useTaskContext();

  return <div className={styles.container}>{ state.formattedSecondsLeft }</div>;
}

