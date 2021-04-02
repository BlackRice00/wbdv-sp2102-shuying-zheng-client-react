import widgetService from "../services/widget-service"

export const CREATE_WIDGET = "CREATE_WIDGET"
export const DELETE_WIDGET = "DELETE_WIDGET"
export const UPDATE_WIDGET = "UPDATE_WIDGET"
export const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC"

export const createWidgetForTopic = (dispatch, tid) => {
    const defaultWidget = {type: "HEADING", size: 3, text: "New Widget"}
    widgetService.createWidgetForTopic(tid, defaultWidget)
        .then(actualWidget => dispatch({
                                           type: CREATE_WIDGET,
                                           widget: actualWidget
                                       }))
}

export const deleteWidget = (dispatch, wid) => {
    widgetService.deleteWidget(wid)
        .then(response => dispatch({
                                       type: DELETE_WIDGET,
                                       wid: wid
                                   }))
}

export const updateWidget = (dispatch, wid, widget) => {
    widgetService.updateWidget(wid, widget)
        .then(status=>dispatch({
                                   type: UPDATE_WIDGET,
                                   updatedWidget: widget
                               }))
}

export const findWidgetsForTopic = (dispatch, tid) => {
    widgetService.findWidgetsForTopic(tid)
        .then(widgets => {
            dispatch({type: FIND_ALL_WIDGETS_FOR_TOPIC, widgets: widgets})
        })
}

export const widgetAction = {
    createWidgetForTopic,
    updateWidget,
    deleteWidget,
    findWidgetsForTopic
}

export default widgetAction


