import React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions, {updateWidget} from "../../../actions/widget-action";
import {connect} from "react-redux";

const WidgetList = ({
                        widgets = [],
                        createWidgetForTopic,
                        deleteWidget,
                        updateWidget,
                        findWidgetsForTopic
                    }) => {

    const {topicId} = useParams();
    useEffect(() => {
        findWidgetsForTopic(topicId)
    }, [findWidgetsForTopic, topicId])

    return (
        <div>
            <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List({widgets.length})</h2>
            <ul className="list-group">

                {widgets.map(widget =>
                                 <li className="list-group-item" key={widget.id}>

                                     {
                                         widget.type === "HEADING" &&
                                         <HeadingWidget
                                             updateWidget={updateWidget}
                                             deleteWidget={deleteWidget}
                                             widget={widget}/>
                                     }

                                     {
                                         widget.type === "PARAGRAPH" &&
                                         <ParagraphWidget
                                             updateWidget={updateWidget}
                                             deleteWidget={deleteWidget}
                                             widget={widget}/>
                                     }
                                 </li>
                )}
            </ul>
        </div>
    )
}

const stmp = state => {
    return {
        widgets: state.widgetReducer.widgets
    }
}

const dtmp = (dispatch) => ({
    createWidgetForTopic: (topicId) => {
        if (topicId !== undefined) {
            widgetActions.createWidgetForTopic(dispatch, topicId)
        }
    },

    updateWidget: (widgetId, widget) => {
        widgetActions.updateWidget(dispatch, widgetId, widget)
    },

    deleteWidget: (widgetId) => {
        widgetActions.deleteWidget(dispatch, widgetId)
    },

    findWidgetsForTopic: (topicId) => {
        widgetActions.findWidgetsForTopic(dispatch, topicId)
    }
})

export default connect(stmp, dtmp)(WidgetList)
