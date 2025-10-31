import { useTelegram } from './assets/hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import ProductList from './components/product-list';
import Button from './components/button';
import Header from './components/header';
import Form from './components/form';

import './App.css';

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path="form" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
