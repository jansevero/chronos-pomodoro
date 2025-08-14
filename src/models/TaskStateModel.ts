import type { TaskModel } from "./taskModel";

export type TaskStateModel = {
  tasks: TaskModel[];
  secondsLeft: number;
  formattedSecondsLeft: string;
  activeTask: TaskModel | null;
  currentCycle: number; //1 a 8
  config: {
    workTime: number;
    shortBreakTime: number;
    longBreakTime: number;
  };
};