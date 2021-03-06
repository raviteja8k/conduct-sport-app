import React, { Component } from 'react';
import styles from './app.module.css';
import Players from './Players/Players';
import Pairs from './Pairs/Pairs';
import Rivals from './Rivals/Rivals';

class App extends Component {
  state = {
    playerNames: ["Sean","Kyle","Emily","Nick", "Gina", "Tina", "Pup", "Labs"],
    pairs: [],
    rivals: []   
  };

  addPlayer = (event) => {
    const newPlayers2 = [...this.state.playerNames];
    if(event.key === 'Enter') {newPlayers2.push(event.target.value)};
    //this.clearValue = event.target.value;
    this.setState({playerNames: newPlayers2, pairs: [], rivals: []});

  }

  deleteItem = (indexKey) => {
    const newPlayers2 = [...this.state.playerNames];
    newPlayers2.splice(indexKey, 1);
    this.setState({playerNames: newPlayers2, pairs: [], rivals: []});
  }

  setRivals = () => {
    let rivals = [];
    let rivalPool = [];
    this.state.pairs.length<1 ? rivals=[...this.state.playerNames] : rivals=[...this.state.pairs];

    if (rivals.length % 2 !== 0) {
      alert("You must have an even number of items. You currently have " + rivals.length + " items.");
  } else {
    while (rivals.length >= 2){
      let pair = [];

      let pairName1 = Math.random() * rivals.length;
      let person1 = rivals.splice(pairName1, 1)[0];

      let pairName2 = Math.random() * rivals.length;
      let person2 = rivals.splice(pairName2, 1)[0];
      
      pair.push(person1 + ' vs ' + person2);
      rivalPool.push(pair); 

    }
  }
  this.setState({rivals: rivalPool});  
  }

  pairPlayers = () => {
    const names = [...this.state.playerNames];
    let pickpool = [];

    if (names.length % 2 !== 0) {
      alert("You must have an even number of names. You currently have " + names.length + " names.");
  } else {
    while (names.length >= 2){
        let pair = [];
	      let name1 = Math.random() * names.length;
        let person1 = names.splice(name1, 1)[0];
  
        let name2 = Math.random() * names.length;
        let person2 = names.splice(name2, 1)[0];

        pair.push(person1 + ' - ' + person2);
        pickpool.push(pair);                             
    }
  } 
 
  this.setState({pairs: pickpool, rivals: []});  
  }

  render(){
    
    const displayClass = [styles.Red];
    if(this.state.playerNames.length%2===0)
    displayClass.push(styles.displayNone);
      

    return(
    <div className={styles.App} >
      <h1 className={styles.h1}>Conduct Sports !</h1>
      <div className={styles.Block}>
        <button onClick={this.pairPlayers} className={styles.greenButton}>Pair</button>
        <button onClick={this.setRivals} className={styles.greenButton}>Set Rival</button>
        </div>
        <p>
        Enter player names here: <input onKeyUp={(e) => this.addPlayer(e)} />
        </p>
        <div className={styles.Block}>
        { this.state.playerNames.map((pnames, pkey) =>
        <Players names={pnames} key={pkey} clicked={() => this.deleteItem(pkey)} />
        )}
        </div>
        
        <p className={displayClass.join(' ')}>You should add another name.</p>
      {/* {this.state.playerNames.length%2===0 ? null: <p className={styles.Red}>You should add another name.</p>} */}

        <div className={styles.Block}>
         {this.state.pairs.length>=1? <h2>..and the pairs are..</h2>: null}
          {this.state.pairs.map((npairs, pairId) => 
            <Pairs pairNames={npairs} key={pairId}/>
          )
          }
        </div>

        <div className={styles.Block}>
         {this.state.rivals.length>=1? <h2>..and the rivals are..</h2>: null}
          {this.state.rivals.map((npairs, pairId) => 
            <Rivals pairNames={npairs} key={pairId}/>
          )
          }
        </div>
    </div>
  );
}
}

export default App;
