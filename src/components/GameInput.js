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

  handleSubmit = event => {
  event.preventDefault();
  this.props.addGame(this.state)
  console.log("state:", this.state)
  this.setState({
    mode: '',
    max_kills: '',
    comments: ''
})
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
        <form onSubmit={(event) => this.handleSubmit(event)}>

          <h3>Game Mode</h3>
            <label>
            Solo
              <input type="radio"
              onChange={(e) => this.handleModeChange(e)}
              value="Solo"
              checked={this.state.mode === "Solo"}
              /> <br/>
            </label>

            <label>
            Duo
              <input type="radio"
              onChange={(e) => this.handleModeChange(e)}
              value="Duos"
              checked={this.state.mode === "Duos"}
              /> <br/>
            </label>

            <label>
            Squads
              <input type="radio"
              onChange={(e) => this.handleModeChange(e)}
              value="Squads"
              checked={this.state.mode === "Squads"}
              /> <br/>
            </label>

            <label>
            50v50
              <input type="radio"
              onChange={(e) => this.handleModeChange(e)}
              value="50v50"
              checked={this.state.mode === "50v50"}
              /> <br/>
            </label>

            <label>
            Playground Mode
              <input type="radio"
              onChange={(e) => this.handleModeChange(e)}
              value="Playground"
              checked={this.state.mode === "Playground"}
              /> <br/>
            </label>

          Max Kills: <input type="number" onChange={(e) => this.handleKillsChange(e)}/>{this.state.max_kills}<br/>
          Comments: <input type="text" onChange={(e) => this.handleCommentsChange(e)}/>{this.state.comments}<br/>
          <input type="submit" value="submit" />
        </form><br/>
      </div>
    )
  }
}

// Mode: <input type="text" onChange={(e) => this.handleModeChange(e)} value={this.state.mode}/> {this.state.mode}<br/>
  // value={this.state.mode}
