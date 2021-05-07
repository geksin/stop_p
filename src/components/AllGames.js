import React from 'react';

function AllGames () {

  const players = [
    {
      name: 'Dooom',
      ingame: true
    },
    {
      name: 'Имя участника',
      ingame: true
    },
    {
      name: 'Dooom',
      ingame: true
    },
    {
      name: 'Имя участника',
      ingame: true
    },
    {
      name: 'Имя участника tit ',
      ingame: false
    },
  ]

  const [list, setList] = React.useState('false');

  function showMore() {
    setList(!list);
  }

    return (
        <section className="board width__all">
          <div className="board__rools">
            <p className="board__text">Текущая игра: продержаться до 12 мая</p>
            <p className="board__text">Условия: не курить</p>
            <ol className="board__list" style={list ? ({display: 'none'}) : ({display: 'block'})}>{players.map((item) => <li className="board__list-player">{item.name}, {item.ingame ? (<span>в игре</span>) : (<span>выбыл</span>)}</li>)}</ol> 
            <a className="board__list-link" onClick={showMore}>{list ? (<span>Показать список участников</span>) : (<span>Скрыть список участников </span>)}</a>
          </div>
          <div className="board__nubmer"><p className="board__nubmer_fact">{players.length}</p>участвует</div>
        </section>
        );
}

export default AllGames;