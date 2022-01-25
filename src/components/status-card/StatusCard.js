import React from 'react'
import {StatusCard, StatusCardIcon , StatusCardInfo} from "./statuscard_element.js"
const Status = props => {
    return (
        <StatusCard>
            <StatusCardIcon>
                {props.icon}
            </StatusCardIcon>
            <StatusCardInfo>
                <h4>{props.count}</h4>
                <span>{props.title}</span>
            </StatusCardInfo>
        </StatusCard>
    )
}
export default Status 