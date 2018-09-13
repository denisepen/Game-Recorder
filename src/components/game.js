import React from 'react'


export default  (props) => {
  return (<tr >
    <td> {props.date} </td>
    <td> {props.mode} </td>
    <td> {props.max_kills} </td>
    <td> {props.final_place} </td>
    <td> {props.victory} </td>
    <td> {props.comments}</td>
  </tr>)
}
// <Game date={game.date} mode={game.mode} max_kills={game.max_kills} final_place={game.final_place} victory={game.victory} comments={game.comments} />

    // <tr key={index}>
    //   <td> {game.date} </td>
    //   <td> {game.mode} </td>
    //   <td> {game.max_kills} </td>
    //   <td> {game.final_place} </td>
    //   <td> {game.victory} </td>
    //   <td> {game.comments}</td>
    // </tr>
