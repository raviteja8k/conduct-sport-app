import React, { Component } from 'react';
import styles from './app.module.css';
import Players from './Players/Players';
import Pairs from './Pairs/Pairs';

class App extends Component {
  state = {
    playerNames: ["Sean","Kyle","Emily","Nick","Cotter","Brian","Jeremy","Kimmy","Pat","Johnny"],
    pairs: ["Sean","Kyle","Emily","Nick","Cotter","Brian","Jeremy","Kimmy","Pat","Johnny"]
    
  };

  addPlayer = (event) => {
    const newPlayers2 = [...this.state.playerNames];
    if(event.key === 'Enter') {newPlayers2.push(event.target.value)};
    //this.clearValue = event.target.value;
    this.setState({playerNames: newPlayers2});
  

  }

  pairPlayers = () => {
    const names = [...this.state.playerNames];
   // let pickpool = []; // Slice the array at the first element to copy it by value

    if (names.length % 2 !== 0) {
      alert("You must have an even number of names. You currently have " + names.length + " names.");
  } else {
      var arr1 = names.slice(), // copy array
          arr2 = names.slice(); // copy array again
  
      arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
      arr2.sort(function() { return 0.5 - Math.random();});
  
      while (arr1.length) {
          var name1 = arr1.pop(), // get the last value of arr1
              name2 = arr2[0] === name1 ? arr2.pop() : arr2.shift();
              //        ^^ if the first value is the same as name1, 
              //           get the last value, otherwise get the first
  
          console.log(name1 + ' gets ' + name2 );
        //  pickpool = (name1 + ' gets ' + name2);
      }
  }
 // this.setState({pairs: picks});  
  }

  render(){
    return(
    <div className={styles.App} >
      <h1 className={styles.h1}>Conduct Sports !</h1>
        Enter player names here: <input onKeyUp={(e) => this.addPlayer(e)} />
       { this.state.playerNames.map((pnames, pkey) =>
        <Players names={pnames} key={pkey}/>
        )}
        <div className={styles.Block}>
        <button onClick={this.pairPlayers} className={styles.greenButton}>Pair</button>
        <button  className={styles.yellowButton}>Set Rival</button>
        </div>
        <div className={styles.Block}>
          {this.state.pairs.map((npairs, pairId) => 
            <Pairs pairNames={npairs} key={pairId}/>
          )
          }
        </div>
    </div>
  );
}
}

export default App;
