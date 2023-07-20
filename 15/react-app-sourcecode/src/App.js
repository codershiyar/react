import './App.css';
import React, { useState } from 'react';
import Header  from './Header';
import Main  from './Main';
import Login  from './Login';

const WelcomeScreen = () => {
  return (
    <div>
      <Header title="Welcome Manager" login={true} />
      <Main />
    </div>
  );
};

const App = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <>
      {loginStatus ? <WelcomeScreen />: <> <Header title="Login"  login={false}/> <Login setLoginStatus={setLoginStatus} /> </>}
    </>
  );
};

export default App;
