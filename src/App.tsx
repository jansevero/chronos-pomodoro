import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';

import './styles/theme.css';
import './styles/global.css';

export default function App() {

  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      <Container>
        <Countdown />
      </Container>

      <Container>
        <form className='form' action="">
          <div className='formRow'>
            <label htmlFor="meuInput">task</label>
            <input id='meuInput' type='text' />
          </div>

          <div className='formRow'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <div className="formRow">
            <p> Ciclos </p>
            <p> 0 0 0 0 0 0 0 </p>
          </div>

          <div className="formRow">
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  )
}