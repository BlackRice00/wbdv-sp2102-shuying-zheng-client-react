import React from 'react'
import {Provider} from "react-redux";

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