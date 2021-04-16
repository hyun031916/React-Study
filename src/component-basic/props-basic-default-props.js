import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

class PersonProfile extends Component {
    render() {
    const { name, age, gender, profile } = this.props

            return (
                <div
                    className='person'
                    style={this.props.highlight ? {color: 'red'} : null}>
                    <h1>Profile</h1>
                    <img src={profile} />
                    <p>name : {name}</p>
                    <p>age : {age}</p>
                    <p>gender : {gender}</p>
                </div>
            )
    }
}

// 클래스의 속성에 defaultProps 속성(객체 타입)을 정의하고 기본 전달 props 값을 설정 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    gender: "Unknown",
    age: 0,
    profile: 'https://via.placeholder.com/150'
}

ReactDOM.render(<PersonProfile />, document.getElementById("root"))

// ReactDOM.render(<App />, document.getElementById("root"))