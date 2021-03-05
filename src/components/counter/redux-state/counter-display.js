import React from 'react'
import {connect} from 'react-redux'

const CounterDisplay = ({count}) =>
    <h1>
        Count: {count}
    </h1>

export default connect()(CounterDisplay)