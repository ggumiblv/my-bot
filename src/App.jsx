import { useTelegram } from './assets/hooks/useTelegram';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import ProductList from './components/product-list';
import Login from './components/login';
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
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
