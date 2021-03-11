const initialState = {
    lessons: [
        // {_id: "001", title: "Lesson A1"},
        // {_id: "002", title: "Lesson B1"},
        // {_id: "003", title: "Lesson C1"},
    ]
}

const lessonReducer = (state=initialState, action) => {
    switch (action.type) {
        case "CREATE_LESSON":
            return {
                ...state,
                lessons: [
                    ...state.lessons,
                    action.lesson
                ]
            }
        case "FIND_LESSONS":
            return {
                ...state,
                lessons: action.lessons
            }
        //    Lesson Reducer
        case "DELETE_LESSON":
            return {
                lessons: state.lessons.filter(lesson => {
                    if(lesson._id === action.lessonToDelete._id) {
                        return false
                    } else {
                        return true
                    }
                })
            }
        case "UPDATE_LESSON":
            return {
                lessons: state.lessons.map(l => {
                    if (l._id === action.lesson._id) {
                        return action.lesson
                    } else {
                        return l
                    }
                })
            }

        default:
            return state
    }

}

export default lessonReducer