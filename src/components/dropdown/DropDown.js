import React, {useRef} from 'react'
import {DropDownWrapper, DropDownToggle, DropDownToggleBadge,
        DropDownContent, DropDownFooter
} from "./dropdown_element.js"
import {IoMdNotificationsOutline} from "react-icons/io"


const clickOutsideRef = (content_ref, toggle_ref) => {
    document.addEventListener("mousedown", (e) => {
        //user click toggle
        if(toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle("active")
        }else {
            //use click outslide toggle and content

            if(content_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active')
            }
        }
    })
}

const DropDown = props => {

    const dropdown_toggle_el = useRef(null);
    const dropdown_content_el = useRef(null);

    clickOutsideRef(dropdown_content_el, dropdown_toggle_el )
    return (
        <DropDownWrapper>
            <DropDownToggle ref={dropdown_toggle_el}>
                {
                    props.icon ?  <IoMdNotificationsOutline style={{fontSize: 35, fontWeight: "bold"}}/> : ""
                }
                {
                    props.badge ? <DropDownToggleBadge>{props.badge}</DropDownToggleBadge> : ""
                }
                {
                    props.customToggle ? props.customToggle() : ""
                }
            </DropDownToggle>
            <DropDownContent ref={dropdown_content_el}>
                {
                    props.contentData && props.renderData ? props.contentData.map((item, index) => 
                        props.renderData(item, index)
                    ) : ""
                }
                {
                    props.renderFooter ? (
                        <DropDownFooter>
                            {
                                props.renderFooter()
                            }
                        </DropDownFooter>
                    ): ""
                }
            </DropDownContent>
        </DropDownWrapper>
    )
}

export default DropDown
