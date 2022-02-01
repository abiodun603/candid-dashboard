import React, {useEffect, useContext} from "react"
import axios from "axios"
import Signin from "./screens/login/Login"
import Layout from "./components/c-layout/Layout"
import "./assets/css/grid.css"
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {AuthContext} from "./context/authContext/AuthContext"

function App() {
		const {user, isFetching} = useContext(AuthContext)
		console.log(user);
		console.log(isFetching)
      return (
        <>
      {/* New AuthProvidr */}
      <Router>
        <Switch>
			<Route exact path="/">{ user? <Layout/> : <Redirect to="/login" />}</Route>
			<Route path = "/login">
				{!user ? <Signin/> : <Redirect to="/" />}
			</Route>
        </Switch>
      </Router>
      
    </>
  )
}

export default App