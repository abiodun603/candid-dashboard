import { createContext, useReducer } from "react"
import { GuardReducer } from "./GuardReducer";

const INITIAL_STATE = {
    guards: [],
    isFetching: false,
    error: false
}

export const GuardContext = createContext(INITIAL_STATE);

export const GuardContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GuardReducer, INITIAL_STATE);

    return (
        <GuardContext.Provider
            value = {{
                guards: state.guards,
                isFetching: state.isFetching,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </GuardContext.Provider>
    )
}