import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';



function Login(props) {
  const [userData, setUserData] = React.useState({email: '',password: ''});

  function handleChange(e) {
    const {name, value} = e.target;
    setUserData({
      ...userData,
      [name]: value
    })
  }
  

  function handleSubmit(e){
    e.preventDefault();
    if (!userData.email || !userData.password){
      return;
    }
    props.onLogin(userData.email, userData.password);
  }

  return(
          <div className="login">
        <h2 className="login__header">
          Вход
        </h2>
        <form onSubmit={handleSubmit} className="login__form">
         <input id="email" name="email" type="text" className="login__input" placeholder="Email" minLength={2} maxLength={40} required value={userData.email} onChange={handleChange} />
          <input className="login__input" required id="password" name="password" type="password" placeholder="Пароль" value={userData.password} onChange={handleChange} />
          <div className="login__button-container">
            <button type="submit" onSubmit={handleSubmit} className="content__message-button">Войти</button>           
            <Link to="/register" className="signup__link">Еще нет аккаунта?</Link> 
          </div>

        </form>
      </div>
    )

}


export default withRouter(Login);

