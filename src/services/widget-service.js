const TOPIC_URL = "https://wbdv-course.herokuapp.com/api/topics"
const WIDGET_URL = "https://wbdv-course.herokuapp.com/api/widgets"

// const TOPIC_URL = "http://localhost:8080/api/topics"
// const WIDGET_URL = "http://localhost:8080/api/topics/${topicId}/widgets"


export const findWidgetsForTopic = (topicId) => {
    return (
    fetch(`${TOPIC_URL}/${topicId}/widgets`)
        .then(response => response.json())
    )
}

// create widget
export const createWidgetForTopic = (topicId, widget) => {
    return(
    // TODO: move server communication to widgets-service.js
    fetch(`${TOPIC_URL}/${topicId}/widgets`, {
        method: "POST",
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
        // .then(actualWidget => {
        //     setWidgets(widgets => ([...widgets, actualWidget]))
        // })
    )
}

// delete widget
export const deleteWidget = (wid) => {
    return (
    fetch(`${WIDGET_URL}/${wid}`, {
        method: "DELETE"
    })
        //     .then(response => {
        //     setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        // })
        .then(response => response.json())
    )
}

// update widget
export const updateWidget = (wid, widget) => {
    return (
        fetch(`${WIDGET_URL}/${wid}`, {
            method: "PUT",
            body: JSON.stringify(widget),
            headers: {
                'content-type': 'application/json'
            }
        })
            //     .then(response => {
            //     setWidgets((widgets) => widgets.map(w => w.id !== wid ? w : widget))
            //     setEditingWidget({})
            // })
            .then(response => response.json())
    )
}

export default {
    findWidgetsForTopic,
    createWidgetForTopic,
    deleteWidget,
    updateWidget
}
