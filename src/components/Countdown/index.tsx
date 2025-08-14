import type { TaskStateModel } from '../../models/TaskStateModel';
import styles from './styles.module.css';

type CountDownProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Countdown() {
  return <div className={styles.container}>00:00</div>;
}

