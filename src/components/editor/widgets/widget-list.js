import React, {useState, useEffect} from 'react'
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from 'react-router-dom';
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

const WidgetList = () => {
    // TODO: move state management to widgets-reducer.js
    const {topicId} = useParams();
    const [widgets, setWidgets] = useState([])
    const [editingWidget, setEditingWidget] = useState({})
    useEffect(() => {
        // TODO: move server communication to widgets-service.js
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
            .then(response => response.json())
            .then(widgets => setWidgets(widgets))
    }, [topicId])

    const updateWidget = () => {}

    const deleteWidget = (wid) =>
        fetch(`http://localhost:8080/api/widgets/${wid}`, {
            method: "DELETE"
        }).then(response => {
            setWidgets((widgets) => widgets.filter(w => w.id !== wid))
        })

    const createWidgetForTopic = () => {
        // TODO: move server communication to widgets-service.js
        fetch(`http://localhost:8080/api/topics/${topicId}/widgets`, {
            method: "POST",
            body: JSON.stringify({type: "HEADING", size:1, text: "New Widget"}),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(actualWidget => {
                setWidgets(widgets => ([...widgets, actualWidget]))
            })
    }

    return(
        <div>
            <i onClick={createWidgetForTopic} className="fas fa-plus fa-2x float-right"></i>
            <h2>Widget List ({widgets.length}) {editingWidget.id}</h2>
            <ul className="list-group">
                {
                    widgets.map(widget =>
                    <li className="list-group-item" key={widget.id}>
                        {
                            editingWidget.id === widget.id &&
                                <>
                                    <i onClick={() => {
                                        updateWidget()
                                        setEditingWidget({})}} className="fas fa-2x fa-check float-right"></i>
                                    <i onClick={() => deleteWidget(widget.id)} className="fas fa-2x fa-trash float-right"></i>
                                </>
                        }
                        {
                            editingWidget.id !== widget.id &&
                            <i onClick={() => setEditingWidget(widget)} className="fas fa-2x fa-cog float-right"></i>
                        }

                        {
                           widget.type === "HEADING" &&
                           <HeadingWidget widget={widget}/>
                        }
                        {
                            widget.type === "PARAGRAPH" &&
                            <ParagraphWidget widget={widget}/>
                        }
                    </li>
                    )
                }
            </ul>
            {JSON.stringify(widgets)}
        </div>
    )
}

export default WidgetList;