import React from 'react'
import DropDown from "../dropdown/DropDown"
import {Link} from 'react-router-dom'
import {TopNavWrapper, TopNavSearch, TopNavRight, TopNavRightItem, NotificationItem,TopNavRightUser, TopNavRightUserImage, TopNavRightUsername} from './topnav_element'
import user_image from "../../assets/images/about.jpg"
import notifications from "../../assets/JsonData/notification"
import user_menu from '../../assets/JsonData/user_menus.js'
import {IoMdNotificationsOutline} from "react-icons/io"
import {FiSearch} from "react-icons/fi"

const curr_user = {
    display_name: "candid security",
    image: user_image
}

// useContext

const renderUserToggle = (user) => (
    <TopNavRightUser>
        <TopNavRightUserImage>
            <img src={user.image} alt=""/>
        </TopNavRightUserImage>
        <TopNavRightUsername>
            {user.display_name}
        </TopNavRightUsername>
    </TopNavRightUser>
)

const renderUserProfile = (item, index) => (
    <Link to="/" key={index}>
        <NotificationItem>
            {item.icon}
            <span style={{marginLeft: 10}}>{item.content}</span>
        </NotificationItem>
    </Link>
)

const renderNoticationItem = (item, index) => (
    <NotificationItem key ={index}>
        <i className = {item.icon}></i>
        <span>{item.content}</span>
    </NotificationItem>
)
const TopNav = () => {
    return (
        <>
            <TopNavWrapper>
                <TopNavSearch>
                    <input type="text" placeholder="Search here..."/>
                    <FiSearch style={{position: "absolute", fontSize: 20, right: 20, top: 15}}/>
                </TopNavSearch>
                <TopNavRight>
                    <TopNavRightItem>
                        {/* dropdown here */}
                        <DropDown
                            customToggle = {() => renderUserToggle(curr_user)}
                            contentData = {user_menu}
                            renderData = {(item, index) => renderUserProfile(item, index)}
                        />
                    </TopNavRightItem>
                    <TopNavRightItem>
                        <DropDown
                            icon = {<IoMdNotificationsOutline/>}
                            badge = "12"
                            contentData = {notifications}
                            renderData = {(item, index) => renderNoticationItem(item, index)}
                            renderFooter = {()=><Link>View All</Link>}
                        />
                    </TopNavRightItem>
                    <TopNavRightItem>
                        {/* Theme here */}
                    </TopNavRightItem>
                </TopNavRight>
            </TopNavWrapper>
        </>
    )
}

export default TopNav
