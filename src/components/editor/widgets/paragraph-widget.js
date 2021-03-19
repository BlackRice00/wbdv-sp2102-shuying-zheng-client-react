import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setEditingWidget, editing}) => {
    return (
        <>
            {
                editing &&
                <textarea
                    onChange={(e) => setEditingWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </>
    )
}

export default ParagraphWidget