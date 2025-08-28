import type { TaskStateModel } from '../../models/TaskStateModel';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';
import { getNextCycle } from '../../utils/getNextCycle';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskStateModel,
  action: TaskActionModel,
): TaskStateModel {
  switch (action.type) {
    case TaskActionTypes.START_TASK: {
      const newTask = action.payload;
      const nextCycle = getNextCycle(state.currentCycle);
      const secondsLeft = newTask.durationInMinutes * 60;

      return {
        ...state,
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsLeft,
        formattedSecondsLeft: formatSecondsToMinutes(secondsLeft),
        tasks: [...state.tasks, newTask],
      };
    }
    case TaskActionTypes.INTERRUPT_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsLeft: 0,
        formattedSecondsLeft: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, interruptDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.COMPLETE_TASK: {
      return {
        ...state,
        activeTask: null,
        secondsLeft: 0,
        formattedSecondsLeft: '00:00',
        tasks: state.tasks.map(task => {
          if (state.activeTask && state.activeTask.id === task.id) {
            return { ...task, completeDate: Date.now() };
          }
          return task;
        }),
      };
    }
    case TaskActionTypes.RESET_STATE: {
      return state;
    }
    case TaskActionTypes.COUNTDOWN: {
      return {
        ...state,
        secondsLeft: action.payload.secondsLeft,
        formattedSecondsLeft: formatSecondsToMinutes(
          action.payload.secondsLeft,
        ),
      };
    }
  }

  // Sempre deve retornar o estado
  return state;
}