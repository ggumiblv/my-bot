import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp;

function App() {
  console.log(window.Telegram);

  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <>
      <div>work</div>
      <button onClick={onClose}>Закрыть</button>
    </>
  );
}

export default App;
