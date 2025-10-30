import { useEffect } from 'react';

import Header from './components/header';

import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Header />
    </div>
  );
}

export default App;
