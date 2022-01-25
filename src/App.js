import React from "react"
import Signin from "./screens/login/Login"
import Layout from "./components/c-layout/Layout"
import "./assets/css/grid.css"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

// create AuthContext
export const AuthContext = React.createContext();

// UserReducer

const initialState = {
  isAuthenticated: false,
  user: "",
  token: ""
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.access_token);
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.access_token
      };

    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <>
      <AuthContext.Provider
        value={{
          state,
          dispatch
        }}  
      >
        
            {
              !state.isAuthenticated ? <Signin/> : <Layout/>
            }
      </AuthContext.Provider>
    </>
  )
}

export default App