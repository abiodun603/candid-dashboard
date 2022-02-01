import React, {useEffect, useReducer} from "react"
import axios from 'axios'

export const initialState = {
    user: [],
    loading: true,
    error: '',
}

export const reduce = (state, action) =>{
    switch(action.type) {
        case 'OnSuccess' : 
            return {
                ...state,
                loading: false,
                user: action.payload.user,
                error: ''
            }
        
        case 'OnFailure': 
            return {
                ...state,
                loading: false,
                user: {},
                error: 'Something went wrong'
            }
        default: 
            return state
    }
}