import React from 'react';

function FormSend (props) {

    const [message, setMessage] = React.useState('Загрузка...');

    function handleChangeName(e) {
        setMessage(e.target.value);
      }
    
    function handleSubmit(e) {
        e.preventDefault();
        props.sendMessage(message);
        setMessage(''); }
    

    return (
        <main className="content">
            <div className="message__avatar"><img className="message__avatar-img" src="https://avatarfiles.alphacoders.com/860/86058.png" title="avatar"></img></div>
            <form onSubmit={handleSubmit} className="content__form-message">
            <textarea type="text" className="content__form-input" placeholder="Расскажите как прошла неделя" minLength={2} onChange={handleChangeName} />
                <div className="content__form-checbox">
                    <div>
                        <label className="content__form-label">
                            <input type="radio" name="ingame" value="true" checked /> Держусь
                        </label>
                        <label className="content__form-label">
                            <input type="radio" name="ingame" value="false" /> Выбываю
                        </label>
                    </div>
                    <button type="submit" className="content__message-button">Отправить</button>
                </div>
            
            </form>

        </main>
    );

}


export default FormSend;