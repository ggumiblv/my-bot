import { useEffect, useRef } from 'react';

const Login = () => {
  const telegramWrapperRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?22';
    script.async = true;
    script.setAttribute('data-telegram-login', 'GgumiblvBot');
    script.setAttribute('data-size', 'medium');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    script.setAttribute('data-request-access', 'write');

    telegramWrapperRef.current.appendChild(script);
  }, []);

  return <div ref={telegramWrapperRef}></div>;
};

export default Login;
