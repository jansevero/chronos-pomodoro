import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

export default function App() {

  return (
    <>
      <Heading>
         Hello World!
         <button>
          <TimerIcon />
         </button>
      </Heading>
    </>
  )
}