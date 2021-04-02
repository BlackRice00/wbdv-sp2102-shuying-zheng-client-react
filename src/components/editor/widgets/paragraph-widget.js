import React, {useState} from 'react'

const ParagraphWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)
    return(
        <>

            {
                editing &&
                <>
                    <select value={cachedWidget.type}
                            onChange={(e)=>{
                                setCachedWidget(cachedWidget=>({...cachedWidget, type:e.target.value}))
                            }}
                            className="form-control">
                        <option value={"HEADING"}>HEADING</option>
                        <option value={"PARAGRAPH"}>PARAGRAPH</option>
                        <option value={"LIST"}>LIST</option>
                        <option value={"IMAGE"}>IMAGE</option>
                    </select>
                    <br/>

                    <textarea value={cachedWidget.text}
                              onChange={(e)=>{
                                  setCachedWidget(cachedWidget=>({...cachedWidget, text: e.target.value}))
                              }}
                              className="form-control"/>
                    <br/>
                    <i
                        onClick={() => {
                            updateWidget(cachedWidget.id, cachedWidget)
                            setEditing(false)
                        }}
                        className="fas fa-check fa-2x float-right"
                    />

                    <i
                        onClick={() => {
                            deleteWidget(cachedWidget.id)
                            setEditing(false)
                        }}
                        className="fas fa-trash fa-2x float-right"
                    />
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => setEditing(true)} className="fas fa-cog fa-2x float-right"></i>
                    <p>{widget.text}</p>
                </>
            }
        </>
    )
}


export default ParagraphWidget
