import React, { Component } from 'react';

export default class GameInput extends Component {
  constructor(){
    super();

    this.state={
      mode: '',
      max_kills: '',
      comments: ''
    }
  }

handleModeChange = (e) => {
  this.setState({
    mode: e.target.value
  })
}

handleKillsChange = (e) => {
  this.setState({
    max_kills: e.target.value
  })
}

handleCommentsChange = (e) => {
  this.setState({
    comments: e.target.value
  })
}

  render(){
    return(
      <div>
        <h2> Please add your game </h2>
        <form>
          Mode: <input type="text" onChange={(e) => this.handleModeChange(e)} value={this.state.mode}/> {this.state.mode}<br/>
          Max Kills: <input type="number" onChange={(e) => this.handleKillsChange(e)}/>{this.state.max_kills}<br/>
          Comments: <input type="text" onChange={(e) => this.handleCommentsChange(e)}/>{this.state.comments}<br/>
          <input type="submit" value="submit" />
        </form><br/>
      </div>
    )
  }
}
