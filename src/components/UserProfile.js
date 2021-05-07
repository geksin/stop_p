import React from 'react';
import { Link, Route } from 'react-router-dom';


function UserProfile (props) {

  function handleSignOut() {
    props.singOut();
  }

  console.log(props)
  
    return (
          <div className="width__all user__profile">
              <div className="user__profile-avatar"><img className="user__profile-avatar-img" src={props.currentUser.avatar} title="avatar"></img></div>
              <div className="user__profile-info">
                <p className="user__profile-text">{props.currentUser.name}</p>
                <p className="user__profile-text">{props.email} (виден только вам) </p>
                <a onClick={handleSignOut} href="#" className="signup__link">Выйти</a>
              </div>
          </div>
        )
}

export default UserProfile;