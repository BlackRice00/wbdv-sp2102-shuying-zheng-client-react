import React, {useState} from 'react'

const HeadingWidget = ({widget, updateWidget, deleteWidget}) => {
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
                    </select>
                    <br/>

                    <input value={cachedWidget.text}
                           onChange={(e)=>{
                               setCachedWidget(cachedWidget=>({...cachedWidget, text: e.target.value}))
                           }}
                           className="form-control"/>
                    <br/>
                    <select value={cachedWidget.size}
                            onChange={(e)=>{
                                setCachedWidget(cachedWidget=>({...cachedWidget, size:parseInt(e.target.value)}))
                            }}
                            className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
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
                    {widget.size === 1 && <h1>{widget.text}</h1>}
                    {widget.size === 2 && <h2>{widget.text}</h2>}
                    {widget.size === 3 && <h3>{widget.text}</h3>}
                    {widget.size === 4 && <h4>{widget.text}</h4>}
                    {widget.size === 5 && <h5>{widget.text}</h5>}
                    {widget.size === 6 && <h6>{widget.text}</h6>}
                </>
            }
        </>
    )
}

export default HeadingWidget;
