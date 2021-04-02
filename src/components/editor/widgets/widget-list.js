import  React, {useState, useEffect} from 'react';
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetActions from "../../../actions/widget-action";
import {connect} from "react-redux";
import ListWidget from "./list-widget";
import ImageWidget from "./image-widget";

const WidgetList = ({
                        widgets = [],
                        createWidget,
                        deleteWidget,
                        updateWidget,
                        findWidgetsForTopic
                    }) => {


    const {topicId} = useParams();
    useEffect(() => {findWidgetsForTopic(topicId)}, [findWidgetsForTopic, topicId])

    return (
        <div>
            <i onClick={() => createWidget(topicId)} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List({widgets.length})</h2>

            <ul className="list-group">

                {widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>

                        {
                            widget.type === "HEADING" &&
                            <HeadingWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                />
                        }

                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                            />
                        }

                        {
                            widget.type === "LIST" &&
                            <ListWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                />
                        }
                        {
                            widget.type === "IMAGE" &&
                            <ImageWidget
                                widget={widget}
                                updateWidget={updateWidget}
                                deleteWidget={deleteWidget}
                                />
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
    createWidget: (topicId) => {
        if (topicId !== undefined) {
            widgetActions.createWidget(dispatch, topicId)
        } else {
            alert("Please select a topic first")
        }
    },

    updateWidget: (wid, widget) => {
        widgetActions.updateWidget(dispatch, wid, widget)
    },

    deleteWidget:(wid) => {
        widgetActions.deleteWidget(dispatch, wid)
    },

    findWidgetsForTopic: (topicId) => {
        widgetActions.findWidgetsForTopic(dispatch, topicId)
    }
})

export default connect(stmp, dtmp) (WidgetList)