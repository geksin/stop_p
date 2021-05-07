import React from 'react';
import BoardGame from './BoardGame.js';
import FormSend from './FormSend.js';
import initialChat from '../unit/initial-chat.js';
import Message from './Message.js';

function Main () {


  // тут событие отправки сообщения
  const [mes, setMes] = React.useState('');
  function createMessage(message) {
    setMes(message); 
  }

    return (
        <>
            <BoardGame currentGame={false} />
            <div className="message-list width__all">
                {initialChat.map((item) => <Message key={item.id} item={item} />)}
            </div>
            <FormSend sendMessage={createMessage} />
        </>
    );
  }


export default Main;