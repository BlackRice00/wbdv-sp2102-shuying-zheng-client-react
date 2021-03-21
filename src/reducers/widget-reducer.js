const initialState = {
    widgets: []
}

const widgetReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets: [
                    ...state.widgets,
                    action.widget
                ]
            }
        case "FIND_WIDGETS":
            return {
                ...state,
                topics: action.widgets
            }

        case "DELETE_WIDGET":
            return {
                widgets: state.widgets.filter(widget => {
                    if(widget._id === action.widgetToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets: state.widgets.map(w => {
                    if (w._id === action.widget._id) {
                        return action.widget
                    } else {
                        return w
                    }
                })
            }
        case "EMPTY_WIDGET":
            return {
                ...state,
                widgets:[]
            }
        default:
            return state
    }

}

export default widgetReducer