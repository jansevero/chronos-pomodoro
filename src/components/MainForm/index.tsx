import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from 'react';
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);
  console.log(nextCycleType);

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const taskName = taskNameInput.current?.value.trim();

    if(!taskName) {
      alert('Digite o nome da tarefa!');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptedDate: null,
      durationInMinutes: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsLeft = newTask.durationInMinutes * 60;

    setState((prevState) => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: nextCycle, 
      secondsLeft,
      formattedSecondsLeft: formatSecondsToMinutes(secondsLeft),
      tasks: [...prevState.tasks, newTask],
    }));
  }

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText={'task'}
          id='meuInput'
          type='text'
          placeholder='Digite algo'
          ref={taskNameInput} />
      </div>

      <div className='formRow'>
        <p>
          O próximo intervalo é de 25 minutos
        </p>
      </div>

       {state.currentCycle > 0 && (
        <div className='formRow'>
          <Cycles />
        </div>
      )}

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  )
}