import React from 'react'
import { Label } from './StyledFormLabel'

const FormLabel = ({htmlFor, children}) => {
    return (
        <Label>
            <label htmlFor={htmlFor}>{children}</label>
        </Label>
    )
}

export default FormLabel
