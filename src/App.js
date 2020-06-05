import React, { Component } from 'react';
import './App.css';
import Players from './Players/Players';
import Pairs from './Pairs/Pairs';

class App extends Component {
  state = {
    playerNames: [],
    pairs: []
    
  };

  addPlayer = (event) => {
    const newPlayers = [...this.state.playerNames];
    if(event.key === 'Enter') {newPlayers.push(event.target.value)};
    //this.clearValue = event.target.value;
    this.setState({playerNames: newPlayers});
  

  }

  pairPlayers = () => {
    console.log('pairs');
  }

  render(){
    return(
    <div className="App">
      <h1>Conduct Sports !</h1>
        Enter player names here: <input onKeyUp={(e) => this.addPlayer(e)} />
       { this.state.playerNames.map((pnames, pkey) =>
        <Players names={pnames} key={pkey}/>
        )}
        <div style={{display: 'block'}}>
        <button onClick={this.pairPlayers}>Pair</button>
        <button >Set Rival</button>
        </div>
        <div style={{display: 'block'}}>
          {this.state.pairs.map((pairs, pairId) => 
            <Pairs pairNames={pairs} key={pairId}/>
          )
          }
        </div>
    </div>
  );
}
}

export default App;
