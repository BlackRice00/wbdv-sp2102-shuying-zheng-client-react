import React, {useState} from 'react'

const ImageWidget = ({widget, updateWidget, deleteWidget}) => {
    const [cachedWidget, setCachedWidget] = useState(widget)
    const [editing, setEditing] = useState(false)

    return (<div>
        {
            !editing &&
            <>
                <i onClick={() => setEditing(true)} className="fas fa-cog fa-2x float-right"></i>
                <img width={cachedWidget.width} height={cachedWidget.height} src={cachedWidget.src}/>
            </>

        }
        {
            editing &&
            <>
                Image URL
                <input value={cachedWidget.src}
                       onChange={(e) => {
                           setCachedWidget(cachedWidget => ({...cachedWidget, src: e.target.value}))
                       }}
                       className="form-control"
                />
                Image Width
                <input value={cachedWidget.width}
                       className="form-control"
                       onChange={(e) => {
                           setCachedWidget(cachedWidget => ({...cachedWidget, width: e.target.value}))
                       }}
                />
                Image Height
                <input value={cachedWidget.height}
                       className="form-control"
                       onChange={(e) =>
                           setCachedWidget(cachedWidget => ({...cachedWidget, height: e.target.value}))
                       }
                />
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
    </div>)
}

export default ImageWidget