import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef } from 'react';
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";

export function MainForm() {
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null);

  //ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  console.log(nextCycle);

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
      durationInMinutes: 1,
      type: 'workTime',
    };

    const secondsLeft = 1 * 60;

    setState((prevState) => ({
      ...prevState,
      activeTask: newTask,
      currentCycle: 1, //conferir depois
      secondsLeft,
      formattedSecondsLeft: '00:00',
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

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  )
}