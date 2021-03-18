import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget}) => {
    return (
        <p>
            {widget.text}
        </p>
    )
}

export default ParagraphWidget