import './../index.css';
import React from 'react';
import Header from './Header.js';
import Register from './Register.js';
import Login from './Login.js';
import Main from './Main.js';
import AllGames from './AllGames.js';
import UserProfile from './UserProfile.js';
import ProtectedRoute from './ProtectedRoute.js';
import * as auth from '../unit/auth.js';
import api from '../unit/api.js';
import { Route, Switch, Redirect, withRouter, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function App() {

// авторизация

  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
      .then((values) => {
        setCurrentUser(values);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  const history = useHistory();

  const [loggedIn, setLoggedIn] = React.useState(false);

  const [email, setEmail] = React.useState('');

  function handleLogin(token) {
    setLoggedIn(true);
    tokenCheck();
  }

  function tokenCheck() {
    const token = localStorage.getItem('token');
    if (token) {
      auth.checkToken(token).then((res) => {
        if (res) {
          setLoggedIn(true);
          setEmail(res.data.email);
          history.push("/");
        }
      });
    }
  }

  React.useEffect(() => {
    tokenCheck();
  }, []);


  function handleSignOut() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    history.push('/login')
  }

  function authLogin(email, password) {
    auth.login(email, password)
      .then((data) => {
        handleLogin(data);
        history.push('/');
      }
      )
      .catch(err => {
        console.log(err);
      });
  }

  function authRegister(email, password) {
    auth.register(email, password)
      .then((data) => {
        history.push('/login');
      }
      )
      .catch(err => {
        console.log(err);
      });
  }

  // конец авторизации



  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn}/>
        <Switch>
          <ProtectedRoute exact path="/" component={Main} loggedIn={loggedIn} />
          <ProtectedRoute  path="/games" component={AllGames} loggedIn={loggedIn} />
          <ProtectedRoute  path="/user" component={UserProfile} loggedIn={loggedIn} singOut={handleSignOut} email={email}/>
          <Route path="/login">
            <Login onLogin={authLogin} />
          </Route>
          <Route path="/register">
            <Register onRegister={authRegister} />
          </Route>
          <Route exact path="/">
            {loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
          </Route>

        </Switch>
      </CurrentUserContext.Provider>
    </>
  );
}

export default withRouter(App);
