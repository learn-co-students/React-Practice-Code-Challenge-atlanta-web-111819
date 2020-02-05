import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sushiList : [],
      start : 0,
      eatenSushi : [],
      budget : 150  
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/sushis")
    .then(res => res.json())
    .then((sushiList) => this.setState({
      sushiList : sushiList
    } 
    ))
  }

  sushiSlicer = () => {
    let batch = []
    batch = [...this.state.sushiList]
    return batch.slice(this.state.start, this.state.start + 4)
     
  }

  moreSushi = (event) => {
    console.log(event)
    let newStart = this.state.start + 4
    this.setState({
      start : newStart
    })
  }

  eatSushi = (sushi) => {

    if(this.state.budget > sushi.price) {
    let newEatenList = [...this.state.eatenSushi, sushi]
    // let newSushiList = this.state.sushiList.filter(s => s !== sushi)
    this.setState({
      // sushiList : newSushiList,
      eatenSushi : newEatenList
    })

    //Subtract Sushi Price

    let newBudget = this.state.budget - sushi.price
    this.setState({
      budget : newBudget
    })
  }
  }


  

  render() {
    return (
      <div className="app">
        <SushiContainer sushiSlicer={this.sushiSlicer()} more={this.moreSushi} eat={this.eatSushi} eaten={this.state.eatenSushi} eatSushi={this.eatenSushi}/>
        <Table money={this.state.budget} eaten={this.state.eatenSushi}/>
      </div>
    );
  }
}

export default App;