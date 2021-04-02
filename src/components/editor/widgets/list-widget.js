import React, {useState} from 'react';

const ListWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)

    return(
        <div>
            {
                editing &&
                <>
                    <input checked={cachedWidget.ordered}
                           type="checkbox"
                           onChange={(e)=>{
                               setCachedWidget(widgetCache=>({...cachedWidget, ordered:e.target.checked}))
                           }}
                    /> Ordered
                    <br/>

                    Item list
                    <textarea value={cachedWidget.text}
                              onChange={(e)=>{
                                  setCachedWidget(cachedWidget=>({...cachedWidget, text:e.target.value}))
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
                    {
                        cachedWidget.ordered &&
                        <>
                            <ol>
                                {
                                    cachedWidget.text.split("\n").map((item) => {
                                        return(
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })
                                }
                            </ol>
                        </>

                    }
                    {
                        !cachedWidget.ordered &&
                        <ul>
                            {
                                cachedWidget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget