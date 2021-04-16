import React, {Component,Fragment} from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'
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

// 기본 props 값도 당연히 적용 가능
PersonProfile.defaultProps = {
    name: "Unknown",
    profile: 'https://via.placeholder.com/150'
}

// 클래스에 propTypes 속성 설정하여 타입 지정 가능
PersonProfile.propTypes = {
    // 속성이름 : PropTypes.자료형[.isRequired]
    // age => 숫자 타입(number)의 값이어야 하며 필수적(isRequired)으로 전달해야 할 속성
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    // name => 문자열 타입(string)의 값이어야 하며 반드시 필요한 속성은 아님
    name: PropTypes.string,
    profile: PropTypes.string
}

ReactDOM.render(
    <div>
        <PersonProfile
            name='John'
            age={35}
            gender='male'
            profile='https://randomuser.me/api/portraits/men/75.jpg' />

    </div>,
    document.getElementById("root"))