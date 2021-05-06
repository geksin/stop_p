import headerLogoPath from '../images/logo.svg';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header (props) {
    return (
        <header className="header">
          <a href="##" target="_self"><img className="header__logo" src={headerLogoPath} alt="Логотип Stop smoke" /></a>
          <nav className="header__menu" style={(props.loggedIn ? ({display:'block'}) : ({display:'none'}) )}>
            <NavLink exact to="/" activeClassName="header__menu_link-active" className="header__menu_link">Лента игры</NavLink>
            <NavLink to="/games" activeClassName="header__menu_link-active" className="header__menu_link">Список игр</NavLink>
            <NavLink to="/user" activeClassName="header__menu_link-active" className="header__menu_link">Моя страница</NavLink>
        </nav>
        </header>
        );
}

export default Header;