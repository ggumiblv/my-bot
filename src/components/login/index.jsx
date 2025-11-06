import { retrieveRawInitData } from '@telegram-apps/sdk';

const initDataRaw = retrieveRawInitData();

const apiUrl = 'https://my-bot-backend-1.onrender.com';

const Login = () => {
  const handleClick = () => {
    fetch(`${apiUrl}/login`, {
      method: 'POST',
      headers: {
        Authorization: `tma ${initDataRaw}`
      }
    });
  };
  return (
    <div>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Login;
