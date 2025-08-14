import type { TaskModel } from "./taskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsLeft: number;
  formattedSecondsLeft: string;
  activeTask: TaskModel | null;
  currentCycle: number;
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};