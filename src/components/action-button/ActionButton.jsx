import React from 'react'
import "./StyledActionButton.css"

const ActionButton = props => {
    return (
        <>
            <div onClick={props.onClick}  className={`action action-${props.type}`}>
                {
                    props.icon
                }
            </div>
        </>
    )
}

export default ActionButton
