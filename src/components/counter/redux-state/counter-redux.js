import React from 'react'
import {Provider} from "react-redux";
import {connect} from "react-redux";
import { createStore } from 'redux'
import CounterUp from "./counter-up";
import CounterDown from "./counter-down";
import CounterDisplay from "./counter-display";

const initialState = {
    count: 234
}

const reducer = (prevState = initialState, action) => {
    switch (action.type) {
        case "UP":
            return {
                count: prevState.count + 1
            }
        case "DOWN":
            return {
                count: prevState.count - 1
            }
        default:
            return prevState
    }
}

const store = createStore(reducer)

const CounterRedux = () =>
    <Provider store={store}>
        <div>
            <CounterDisplay/>
            <CounterUp/>
            <CounterDown/>
        </div>
    </Provider>
export default CounterRedux