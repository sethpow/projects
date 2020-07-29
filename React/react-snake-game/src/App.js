import React, { Component } from 'react'
import Snake from './Snake'
import Food from './Food'


const foodCoor = () => {
  let min = 1
  let max = 98
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  let y = Math.floor((Math.random()*(max-min+1)+min)/2)*2
  return [x,y]
}

const initialState = {
  speed: 200,
  direction: 'RIGHT',
  food: foodCoor(),
  snakeDots: [
    [0,0],
    [2,0]
  ]
}

export default class App extends Component {
  constructor(){
    super()
    this.state = initialState
  }

  componentDidMount(){
    setInterval(this.moveSnake, this.state.speed)
    document.onkeydown = this.onKeyDown
  }

  componentDidUpdate(){
    this.outOfBounds()
    this.selfHit()
    this.eatFood()
  }

  onKeyDown = (e) => {
    e = e || window.event
    switch (e.keyCode){
      case 38:
        this.setState({direction: 'UP'});
        break
      case 40:
        this.setState({direction: 'DOWN'});
        break
      case 37:
        this.setState({direction: 'LEFT'});
        break
      case 39:
        this.setState({direction: 'RIGHT'});
        break
    }
  }

  moveSnake = () => {
    let dots = [...this.state.snakeDots]
    let head = dots[dots.length-1]

    switch (this.state.direction){
      case 'RIGHT':
        head = [head[0] + 2, head[1]]
        break
      case 'LEFT':
        head = [head[0] - 2, head[1]]
        break
      case 'DOWN':
        head = [head[0], head[1] + 2]
        break
      case 'UP':
        head = [head[0], head[1] - 2]
        break
    }
    dots.push(head) //adding the head
    dots.shift() //removing tail
    this.setState({
      snakeDots: dots
    })
  }

  outOfBounds(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0 ){
      this.gameOver()
    }
  }

  selfHit(){
    let snake = [...this.state.snakeDots]
    let head = snake[snake.length - 1]
    snake.pop()
    snake.forEach(dot => {
      if (head[0] == dot[0] && head[1] == dot[1]){
        this.gameOver()
      }
    })
  }

  eatFood(){
    let head = this.state.snakeDots[this.state.snakeDots.length - 1]
    let food = this.state.food
    if (head[0] == food[0] && head[1] == food[1]){
      this.setState({
        food: foodCoor()
      })
      this.growSnake()
      this.speedUp()
    }
  }

  growSnake(){
    let newSnake = [...this.state.snakeDots]
    newSnake.unshift([])
    this.setState({
      snakeDots: newSnake
    })
  }

  speedUp(){
    if (this.state.speed > 10){
      this.setState({
        speed: this.state.speed - 10
      })
    }
  }

  gameOver(){
    alert(`
    Game Over!
    Snake length was: ${this.state.snakeDots.length}
    `)
    this.setState(initialState) //resets game
  }

  render(){
    return (
      <div>
        <h1>Original Snake Game</h1>
        <div className = 'game-area' >
          <Snake snakeDots = {this.state.snakeDots} />
          <Food dot = {this.state.food} />
        </div>
      </div>
    )
  }
}