import { useState } from 'react';

const apiUrl = 'https://my-bot-backend-1.onrender.com';

export const useAuth = () => {
  // Состояние, указывающее, авторизован ли пользователь
  const [isAuth, setIsAuth] = useState(false);

  // Функция для отправки данных на сервер и получения статуса аутентификации
  const signIn = async (initData) => {
    try {
      const response = await fetch(`${apiUrl}/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ initData })
      });

      const data = await response.json();
      setIsAuth(data);

      if (data.success) {
        alert(`Добро пожаловать, ${data.user.first_name}!`);
      } else {
        alert('Ошибка авторизации.');
      }
    } catch (err) {
      console.error('Auth error:', err);
    }
  };

  return { isAuth, signIn };
};
