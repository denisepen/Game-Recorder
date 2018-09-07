import React from 'react';

const Games = props => {
  const games = props.games.map((game, index) => {
    return <li key={index}>{game.mode} Kills:{game.max_kills} {game.comments}</li>;
  });

  return (
    <div>
      <ul>
        {games}
      </ul>
    </div>
  );

};

export default Games;
