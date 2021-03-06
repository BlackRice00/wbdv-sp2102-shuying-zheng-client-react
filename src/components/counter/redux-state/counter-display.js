import React from 'react'
import {connect} from 'react-redux'

const CounterDisplay = ({myCount, message}) =>
    <h1>
        Count: {myCount}{message}
    </h1>

const stateToPropertyMapper = (state) => {
    return {
        myCount: state.count,
        message: "hello"
    }
}

export default connect(stateToPropertyMapper)(CounterDisplay)