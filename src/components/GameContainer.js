import React, { Component} from 'react';
import GameInput from './GameInput'
import GameList from './GameList'

export default class GameContainer extends Component {

  render (){
    return(
      <div>
        <GameInput />
        <GameList />
      </div>
    )
  }
}
