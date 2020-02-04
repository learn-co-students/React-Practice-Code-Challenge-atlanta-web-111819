import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    cursor: 0,
    eatenSushi: [],
    wallet: 150
  }

  componentDidMount() {
    fetch(API).then(res => res.json()).then(sushi => this.setState({allSushi: sushi}))
  }

  getMoreSushi = () => {
    this.setState(prevState => {
      return {
        cursor: prevState.cursor + 4
      }
    })
  }

  addEatenSushi = sushi => {
    const {wallet, eatenSushi} = this.state
    if(wallet >= sushi.price && !eatenSushi.includes(sushi)) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        wallet: wallet - sushi.price
      })
    }
  }

  render() {
    const {allSushi, cursor, eatenSushi, wallet} = this.state
    return (
      <div className="app">
        <SushiContainer 
          allSushi={allSushi.slice(cursor, cursor+4)} 
          getMoreSushi={this.getMoreSushi}
          eatenSushi={eatenSushi}
          addEatenSushi={this.addEatenSushi}
        />
        <Table eatenSushi={eatenSushi} balance={wallet}/>
      </div>
    );
  }
}

export default App;