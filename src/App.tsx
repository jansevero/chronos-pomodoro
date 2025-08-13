import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { Countdown } from './components/Countdown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { useState } from 'react';

export default function App() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(numero + 1);
  }

  return (
    <>
      <Heading>Número: {numero}</Heading>
      <button onClick={handleClick}>Olá</button>
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
            <DefaultInput
              labelText={numero.toString()}
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
      </Container>

      <Container>
        <Footer />
      </Container>
    </>
  )
}