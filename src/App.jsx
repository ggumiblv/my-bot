import { useTelegram } from './assets/hooks/useTelegram';
import { useAuth } from './assets/hooks/useAuth';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';

import ProductList from './components/product-list';
import Login from './components/login';
import Header from './components/header';
import Form from './components/form';

import './App.css';

function App() {
  const { isAuth, signIn } = useAuth();
  const { tg } = useTelegram();

  useEffect(() => {
    tg.ready();
    signIn(window.Telegram.WebApp.initData);
  }, []);

  return (
    <div className="app">
      <Header />
      {isAuth ? <p>Authenticated</p> : <p>Not Authenticated</p>}
      <Routes>
        <Route index element={<ProductList />}></Route>
        <Route path="form" element={<Form />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
