import React from 'react'
import {SidebarWrapper, SidebarLogo, SideBarItemWrapper,
        SideBarItemInner,
        SideBarIcon,
} from "./sidebar_element.js"
import sidebar_items from "../../assets/JsonData/sidebar_routes"
import {Link} from 'react-router-dom'
import * as Icons from "react-icons/ai"
// import * as Icons from "react-icons/bi"
import "boxicons/css/boxicons.min.css"

const SideBarItem = props => {
    const active = props.active ? "active" : ""
    return (
        <>
            <SideBarItemWrapper>
                <SideBarItemInner className = {active}>
                    <SideBarIcon>
                        {props.icon}
                    </SideBarIcon>
                    <span>
                        {props.title}
                    </span>
                </SideBarItemInner>
            </SideBarItemWrapper>
        </> 
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)
    return (
        <>
            <SidebarWrapper>
                <SidebarLogo>
                    <h2>CANDID SECURITY</h2>
                </SidebarLogo>
                {
                    sidebar_items.map((item, index) => (
                        <Link to ={item.route} key={index}>
                            <SideBarItem
                                title = {item.display_name}
                                icon = {item.icon}
                                active = {index === activeItem}
                            />
                        </Link>
                    ))
                }
            </SidebarWrapper>
        </>
    )
}

export default Sidebar
