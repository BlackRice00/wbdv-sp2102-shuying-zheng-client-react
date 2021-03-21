import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom';
import {findWidgetsForTopic, createWidgetForTopic, deleteWidget, updateWidget} from '../../../services/widget-service';

// const WidgetList = () => {
//     // TODO: move state management to widgets-reducer.js
//     const {topicId} = useParams();
//     const [widgets, setWidgets] = useState([])
//     const [editingWidget, setEditingWidget] = useState({})
//     useEffect(() => {
//         // TODO: move server communication to widgets-service.js
//         fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
//             .then(response => response.json())
//             .then(widgets => setWidgets(widgets))
//     }, [topicId])
//
//
//
//     // widget-service
//
//
//     return(
//         <div>
//             <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
//             <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
//             <ul className="list-group">
//                 {
//                     widgets.map(widget =>
//                     <li className="list-group-item" key={widget.id}>
//                         {
//                             editingWidget.id === widget.id &&
//                                 <>
//                                     <i onClick={() => {
//                                         updateWidget(widget.id, editingWidget)
//                                         }} className="fas fa-2x fa-check float-right"></i>
//                                     <i onClick={() => deleteWidget(widget.id)}
//                                        className="fas fa-2x fa-trash float-right"></i>
//                                 </>
//                         }
//                         {
//                             editingWidget.id !== widget.id &&
//                             <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
//                         }
//
//                         {
//                            widget.type === "HEADING" &&
//                            <HeadingWidget
//                                setEditingWidget={setEditingWidget}
//                                editing={editingWidget.id === widget.id}
//                                widget={widget}/>
//                         }
//                         {
//                             widget.type === "PARAGRAPH" &&
//                             <ParagraphWidget
//                                 setEditingWidget={setEditingWidget}
//                                 editing={editingWidget.id === widget.id}
//                                 widget={widget}/>
//                         }
//                     </li>
//                     )
//                 }
//             </ul>
//             {JSON.stringify(widgets)}
//         </div>
//     )
// }

const WidgetList = (
    {
        widgets=[],
        findWidgetsForTopic,
        createWidgetForTopic,
        deleteWidget,
        updateWidget
    }
) =>{
    const [editingWidget, setEditingWidget] = useState({})
    const {topicId, widgetId} = useParams();
    useEffect(() => {
        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
        }
    }, [topicId])
    return (<div>
        <h2>Widgets</h2>
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List {widgets.length} {editingWidget._id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                        <li className="list-group-item" key={widget.id}>
                            {
                                editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget(widget._id, editingWidget)
                                    }} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget._id)}
                                       className="fas fa-2x fa-trash float-right"></i>
                                </>
                            }
                            {
                                editingWidget.id !== widget.id &&
                                <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                            }

                            {
                                widget.type === "HEADING" &&
                                <HeadingWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    setEditingWidget={setEditingWidget}
                                    editing={editingWidget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
        {/*<ul className="nav nav-tabs">*/}
        {/*    {*/}
        {/*        lessons.map(lesson =>*/}
        {/*            <li className="nav-item">*/}
        {/*                <EditableItem*/}
        {/*                    active={lesson._id === lessonId}*/}
        {/*                    updateItem={updateLesson}*/}
        {/*                    deleteItem={deleteLesson}*/}
        {/*                    to={`/courses/${layout}/editor/${courseId}/modules/${moduleId}/lessons/${lesson._id}`}*/}
        {/*                    item={lesson}/>*/}
        {/*            </li>*/}
        {/*        )*/}
        {/*    }*/}
        {/*    <li>*/}
        {/*        <i onClick={() => createWidgetForTopic(topicId)} className="fas fa-plus"></i>*/}
        {/*    </li>*/}
        {/*</ul>*/}
    </div>)
}


const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({
    findWidgetsForTopic: (topicId) => {
        console.log(topicId)
        findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS",
                widgets: widgets
            }))
    },
    createWidgetForTopic: (topicId) =>
    createWidgetForTopic(topicId, {text: "New Widget", type: "HEADING"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget: widget
            }))
    ,
    updateWidget: (widget) =>
        updateWidget(widget._id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget: widget
            })),
    deleteWidget: (item) => {
        deleteWidget(item._id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: item
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList);