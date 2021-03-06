import React, { Component} from 'react';
import { connect } from 'react-redux';
import GameInput from './GameInput'
import Games from './Games'

class GameContainer extends Component {

  render (){
    return(
      <div>
        <GameInput addGame={this.props.addGame}/>
        <Games games={this.props.games}/>
      </div>
    )
  }
}

const mapStateToProps = ({ games }) => ({ games })

const mapDispatchToProps = dispatch => ({ addGame: game => dispatch({ type: "ADD_GAME", game }) })

export default connect (mapStateToProps, mapDispatchToProps)(GameContainer)

// function mapDispatchToProps(dispatch) {
//   return {
//     addGame: function(game) {
//       return dispatch({ type: "ADD_GAME", game });
//     }
//   };
// }
