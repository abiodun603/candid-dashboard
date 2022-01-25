import React from 'react'
import { FormInputText, Input } from './StyledFormInput'

const FormInput = (props) => {
    return (
        <>
            <FormInputText>
                <Input type = "text" {...props}/>
            </FormInputText>
        </>
    )
}

export default FormInput
