import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = (
    {
        to="/somewhere/to",
        deleteItem,
        updateItem,
        item= {title: "Title", _id: "ID"},
        active
    }) => {
    const [editing, setEditing] = useState(false)
    const [cachedItem, setCachedItem] = useState(item)
    return (
        <div>
            {
                !editing &&
                <>
                    <Link className={`nav-link ${active ? 'active' : ''}`} to={to}>
                        {item.title}
                    </Link>
                    <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                </>
            }

            {
                editing &&
                <div>
                    <input
                        onChange={(e) =>
                            setCachedItem({
                                ...item,
                                title: e.target.value
                            })}
                        value={cachedItem.title}/>

                    <i onClick={() => {
                        setEditing(false)
                        updateItem(cachedItem)
                    }} className="fas fa-check"></i>
                    <i onClick={() => {
                        setEditing(false)
                        deleteItem(item)
                    }} className="fas fa-times"></i>
                </div>
            }

        </div>
    )
}

export default EditableItem