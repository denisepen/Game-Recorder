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

handlechange = () => {

}

  render(){
    return(
      <div>
        <h2> Please add your game </h2>
        <form>
          Mode: <input type="text" onChange={this.handleChange}/><br/>
          Max Kills: <input type="text" /><br/>
          Comments: <input type="text" /><br/>
          <input type="submit" value="submit" />
        </form><br/>
      </div>
    )
  }
}
