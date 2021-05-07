import React from 'react';
import { Link } from 'react-router-dom';

function Message (props) {
  
    return (
        <div className="message width__all">
               <div className="message__avatar"><img className="message__avatar-img" src={props.item.avatar} title="avatar"></img></div>
                <div className="message__send">
                  <Link href="/profile?{props.items.id}" className="message__name">{props.item.name}</Link>
                  <p className="message__text">{props.item.message}</p>
                  <div className="message__time">{props.item.date}</div>
                </div>
                
          </div>
        )
}

export default Message;