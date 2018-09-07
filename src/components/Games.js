import React from 'react';

const Games = props => {
  const games = props.games.map((game, index) => 

      <tr key={index}>
        <td> {game.mode} </td>
        <td> {game.max_kills} </td>
        <td> {game.comments}</td>
      </tr>

  );

  return (
    <div>
      <table>
        <tr>
          <th>Game Mode</th>
          <th>Max Kills</th>
          <th>Comments</th>
        </tr>

          {games}

      </table>

    </div>
  );

};

export default Games;

// <li key={index}>{game.mode} Kills:{game.max_kills} {game.comments}</li>;
// <ul>
//   {games}
// </ul>
