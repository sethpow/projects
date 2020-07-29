import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  constructor(){
    super()
    this.state = {
      dice: 1
    }
  }
  
  rollDice = () => {
    const diceValue = Math.floor(Math.random() * 6 + 1)
    this.setState({
      dice: diceValue
    })
  }

  render(){
    return (
      <div>
        <div className = 'container'>
          <div className = 'dicecontainer'>
            <img className = 'dice' src = {require(`./dice/dice${this.state.dice}.png`)} alt = 'dice' />
          </div>
          <div className = 'dicebtn'>
            <button onClick = {this.rollDice}>Roll dice</button>
          </div>
        </div>
      </div>
    )
  }
}