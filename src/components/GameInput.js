import React, { Component } from 'react';

export default class GameInput extends Component {
  constructor(){
    super();



    this.state={
      date: '',
      mode: '',
      max_kills: '',
      final_place: '',
      comments: '',
      victory: 'Next Time'
    }
  }

  handleSubmit = event => {
  event.preventDefault();
  this.props.addGame(this.state)
  console.log("state:", this.state)
  this.setState({
    
    mode: '',
    max_kills: '',
    final_place: '',
    comments: '',

  })
}

handleDateChange = (e) => {
  this.setState({
    date: e.target.value
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


handlePlaceChange = (e) => {
  this.setState({
    final_place: e.target.value
  })
}

handleCommentsChange = (e) => {
  this.setState({
    comments: e.target.value
  })
}

handleWinnerChange = (e) => {
  this.setState(
       {victory: e.target.value}
  )
}

  render(){
    return(
      <div>
        <h2> Please add your game </h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        Date: <input type="date" onChange={(e) => this.handleDateChange(e)}/>{this.state.date}<br/>

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
          Final Place:<input type="number" onChange={(e) => this.handlePlaceChange(e)}/>{this.state.final_place}<br/>
          Comments: <input type="text" onChange={(e) => this.handleCommentsChange(e)}/>{this.state.comments}<br/>

          <label>
          1st Place?
            <input type="checkbox"
            onChange={(e) => this.handleWinnerChange(e)}
            value={ "Winner"}
            checked={this.state.victory === "Winner" }


            /> <br/>
          </label>
          <input type="submit" value="Submit" />
        </form><br/>
      </div>
    )
  }
}

// Mode: <input type="text" onChange={(e) => this.handleModeChange(e)} value={this.state.mode}/> {this.state.mode}<br/>
  // value={this.state.mode}

  // checked={this.state.winner === "Winner"}
