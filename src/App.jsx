import { useTelegram } from './assets/hooks/useTelegram';
import { useEffect } from 'react';

import Header from './components/header';

import './App.css';
import Button from './components/button';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Header />
      <Button onClick={onToggleButton}>toggle</Button>
    </div>
  );
}

export default App;
