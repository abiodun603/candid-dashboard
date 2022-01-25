import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import DRoutes from '../Routes'
import TopNav from "../topnav/TopNav"
import {LayoutWrapper, LayoutContent, LayoutContentMain} from './layout_element.js'
import {BrowserRouter as Router,Switch, Route} from "react-router-dom"

const Layout = () => {
    return (
        <Router>
            <Switch>
               <Route render={(props) => 
                    <>
                        <LayoutWrapper>
                            <Sidebar {...props}/>
                            <LayoutContent>
                                <TopNav/>
                                <LayoutContentMain>
                                    <DRoutes/>
                                </LayoutContentMain>
                            </LayoutContent>
                        </LayoutWrapper>
                    </>
               }/>
            </Switch>
        </Router>
       
    )
}

export default Layout
