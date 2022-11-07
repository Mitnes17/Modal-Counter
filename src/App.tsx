import { useState } from 'react';
import './App.css';
import { Counter } from './components/Counter';
import { Modal } from './components/Modal';

function App() {
  const [state, setState] = useState(false);

  const isCounter = (isActive: any) => setState(isActive);

  return (
    <div className='App'>
      <Modal
        {...{ isCounter }}
        isHidden={state}
      />
      <Counter
        {...{ isCounter }}
        isShown={state}
      />
    </div>
  );
}

export default App;
