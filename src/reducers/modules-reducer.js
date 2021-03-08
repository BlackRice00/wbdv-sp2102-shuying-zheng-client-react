import {act} from "@testing-library/react";

const initialState = {
    modules: [
        {_id: 123, title: "Module 1"},
        {_id: 124, title: "Module 2"},
        {_id: 125, title: "Module 3"},
    ]
}

const moduleReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_MODULE":
            const newState = {
                modules: [
                    ...state.modules,
                    {
                        title: "New Module",
                        _id: (new Date()).getTime()
                    }
                ]
            }
            return newState
        case "DELETE_MODULE":
            alert("DELETE the module " + action.moduleToDelete.title)
            const deleteState = {
                modules: state.modules.filter(module => {
                    if(module._id === action.moduleToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
            return deleteState
        case "UPDATE_MODULE":
            return {
                modules: state.modules.map(m => {
                    if (m._id === action.module._id) {
                        return action.module
                    } else {
                        return m
                    }
                })
            }
        default:
            return state
    }
}

export default moduleReducer