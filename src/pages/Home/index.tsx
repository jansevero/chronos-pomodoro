import { Container } from "../../components/Container";
import { Countdown } from "../../components/Countdown";
import { MainForm } from "../../components/MainForm";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { MainTemplate } from "../../templates/MainTemplate";

type HomeProps = {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

export function Home(props: HomeProps) {
  const { state, setState } = props;

  return (
    <MainTemplate>
      <Container>
        <Countdown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  )
}