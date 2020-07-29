import React, { Component } from 'react'

export default class MemeGenerator extends Component {
    constructor(){
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randomImage: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
    }

    componentDidMount(){
        console.log('Comp will mount')
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(memes[0])
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    onChange = (event) => {
        console.log('typing')
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
        console.log('before state')
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log('submitted')
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({
            randomImage: randMeme
        })
    }

    render(){
        console.log('Render')
        return (
            <div>
                <form className='meme-form' onSubmit = {this.handleSubmit}>
                    <input
                        name = 'topText'
                        value = {this.state.topText}
                        type = 'text'
                        placeholder = 'Meme top text'
                        onChange = {this.onChange}
                    /><br/>
                    <input
                        name = 'bottomText'
                        value = {this.state.bottomText}
                        type = 'text'
                        placeholder = 'Meme bottom text'
                        onChange = {this.onChange}
                    /><br/>
                    <button>Generate Meme</button>
                </form>
                <div className='meme'>
                    <img src={this.state.randomImage} alt='meme'/>
                    <h2 className='top'> {this.state.topText} </h2>
                    <h2 className='bottom'> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}