import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard, Customers, Guards, Staff, ShowGuardData} from "../screens/"




function DRoutes() {
    return (
        <Switch>
            <Route path="/" exact component = {Dashboard}/>
            <Route path ="/customers" component = {Customers}/>
            <Route path ="/guards" component = {ShowGuardData}/>
            <Route path ="/viewGuard" component = {Guards}/>
            <Route path = "/staff" component = {Staff} />
        </Switch>
    )
}

export default DRoutes
