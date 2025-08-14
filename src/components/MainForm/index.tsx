import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import type { TaskStateModel } from "../../models/TaskStateModel";

type MainFormProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function MainForm() {
  return (
    <form className='form' action="">
      <div className='formRow'>
        <DefaultInput
          labelText={'task'}
          id='meuInput'
          type='text'
          placeholder='Digite algo' />
      </div>

      <div className='formRow'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
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