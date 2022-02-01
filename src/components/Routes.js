import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard, Customers, Guards, Staff, ShowGuardData} from "../screens/"




function DRoutes() {
    return (
        <Switch>
            <Route path="/" exact component = {Dashboard}/>
            <Route path ="/customers" component = {Customers}/>
            <Route path ="/guards" component = {Guards}/>
            <Route path ="/viewGuard" component = {ShowGuardData}/>
            <Route path = "/staff" component = {Staff} />
        </Switch>
    )
}

export default DRoutes
