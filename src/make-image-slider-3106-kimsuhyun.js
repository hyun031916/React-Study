import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class ImageSlider extends Component {

    constructor(props) {
        super(props)

        // 기능 구현에 필요한 값을 state에 추가 가능
        this.state = {
            images : [
                'https://via.placeholder.com/100x100?text=Image+1',
                'https://via.placeholder.com/100x100?text=Image+2',
                'https://via.placeholder.com/100x100?text=Image+3',
                'https://via.placeholder.com/100x100?text=Image+4'
            ],
            id: 0
        }

    }
    prevImage =()=>{
        this.setState(state=>{
            return{id: this.state.id-1}
        })
    }

    nextImage=()=>{
        this.setState(state=>{
            return{id: this.state.id+1}
        })
    }

    render() {
        return (
            <div>
                <img src={this.state.images[this.state.id]}/><br/>
                {this.state.id>=1 ? <button onClick={this.prevImage}>prev</button>:null}
                {this.state.id>=3 ? null:<button onClick={this.nextImage}>next</button>}
            </div>
        )
    }
}

ReactDOM.render(<ImageSlider />, document.getElementById("root"))