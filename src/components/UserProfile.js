import React from 'react';
import { Link, Route } from 'react-router-dom';


function UserProfile (props) {

  function handleSignOut() {
    props.singOut();
  }
  
    return (
          <div className="login__signup">
            <Route path="/login">
              <Link to="/register" className="signup__link">Регистрация</Link> 
            </Route>
            <Route path="/register">
              <Link to="/login" className="signup__link">Войти</Link> 
            </Route>
            <Route exact path="/user">
              <p>{props.email} <a onClick={handleSignOut} href="#" className="login__sing-out">Выйти</a></p>
            </Route>
          </div>
        )
}

export default UserProfile;