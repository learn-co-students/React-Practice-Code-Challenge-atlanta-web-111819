import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {


    state = {
      list: [],
      eaten: [],
      money: 100,
      index: 0
    }

    componentDidMount(){
      fetch(API)
      .then(res => res.json())
      .then(data => {
        this.setState({list: data})
      })
    }


    sushiPage = () => {
      let newList = [...this.state.list]
      return newList.slice(this.state.index,this.state.index+4)
    }

    handleNextPages = () => {
      if((this.state.index+4) < this.state.list.length){
        this.setState({
          index: this.state.index + 4
        })}else{
          alert('YOU ARE ON THE LAST PAGE')
        }
    }
    handleBackPages = () => {
      if(this.state.index >= 4){
      this.setState({
        index: this.state.index - 4
      })}else{
        alert('YOU ARE ON THE FIRST PAGE')
      }
      
    }



    handleEat = (sushi) => {
      console.log(sushi);
      if((this.state.money-sushi.price)>=0){
        if(!this.state.eaten.includes(sushi)){
          this.setState({
            eaten: [...this.state.eaten, sushi],
            money:  this.state.money - sushi.price})
        }else{
          alert('YOU ATE THIS ALREADY')
        }}else{
          alert('NO MORE MONEY')
        }
      }



  render() {
    return (
      <div className="app">

        <SushiContainer 
          handleEat={this.handleEat}
          handlePages={this.handleNextPages}
          handleBackPages={this.handleBackPages}
          list={this.sushiPage()}
          eaten={this.state.eaten} />



        <Table 
        money={this.state.money}
        list={this.state.eaten}/>
      </div>
    );
  }
}

export default App;