import * as React from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StatesInfo } from './context/states';
import { PrivateRoute } from './helpers/privateRoutes/privateRoute';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { render } from 'react-dom';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isCheckedDisclaimer, setIsCheckedDisclaimer] = useState(false);
  const [token, setToken] = useState('');
  const [users, setUsers] = useState([]);

  const auth = () => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('email');
    if (username && token) {
      return true;
    } else {
      return false;
    }
  };

  const isLoggedIn = auth();

  return (
    <BrowserRouter>
      <StatesInfo.Provider
        value={{
          username,
          setUsername,
          password,
          setPassword,
          isCheckedDisclaimer,
          setIsCheckedDisclaimer,
          token,
          setToken,
          users,
          setUsers,
        }}
      >
        <Switch>
          <PrivateRoute
            exact
            isLoggedIn={isLoggedIn}
            path="/dashboard"
            component={Dashboard}
          />
          <Route exact path={'/'} component={Login} />
        </Switch>
      </StatesInfo.Provider>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById('root'));
