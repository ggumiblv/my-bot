// import { retrieveRawInitData } from '@telegram-apps/sdk';

// const initDataRaw = retrieveRawInitData();

// const apiUrl = 'https://my-bot-backend-1.onrender.com';

const Login = () => {
  // const handleClick = () => {
  //   fetch(`${apiUrl}/login`, {
  //     method: 'POST',
  //     headers: {
  //       Authorization: `tma ${initDataRaw}`
  //     }
  //   });
  // };
  return (
    <div>
      <script
        async
        src="https://telegram.org/js/telegram-widget.js?22"
        data-telegram-login="GgumiblvBot"
        data-size="medium"
        data-auth-url="https://my-bot-backend-6ig5.onrender.com"
        data-request-access="write"
      ></script>
    </div>
  );
};

export default Login;
