import React, { useState, useRef, useEffect } from 'react'
import guardsList from "../../assets/JsonData/guards-list"
import ActionButton from '../../components/action-button/ActionButton'
import Table from "../../components/table/Table"
import {Camera, CameraContainer, Canvas} from "./StyledGuards"
import { PageHeader } from './StyledGuards'
import {FiEdit, FiTrash2} from "react-icons/fi"
import {AiOutlineFolderView, AiOutlineUserAdd} from "react-icons/ai"
import { Card2 } from '../dashboard/dash_element'
import {  DialogActions, DialogContent, TextField } from '@mui/material'
import { Button, FromBx, Input} from '../login/Login__element'
import AlertDialog from "../../components/dialog/Dialog"
import { AddCustomer, HeaderContainer } from './StyledGuards'
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
 
// Radio button import
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from 

"styled-components"

const guardsTableHead = [
    "",
    "name",
    "mobile",
    "loaction",
    "salary",
    "status"
]


const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.mobile}</td>
        <td>{item.location}</td>
        <td>{item.salary}</td>
        <td>
            <span style={{display: "flex"}}>
                <ActionButton
                    icon = {<AiOutlineFolderView/>}
                    type = "view"
                />
                <ActionButton
                    icon = {<FiEdit/>}
                    type = "edit"
                />
                <ActionButton
                    icon = {<FiTrash2/>}
                    type = "warning"
                />
            </span>
        </td>
    </tr>
) 


const Guards = () => {
    const [open, setOpen] = useState(false);

    const handleClickClose = () => {
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <HeaderContainer>
                <PageHeader>Guards</PageHeader>
                <AddCustomer  onClick={handleClickOpen}>
                    <AiOutlineUserAdd/>
                </AddCustomer>
            </HeaderContainer>

            <Card2>
                <Table
                    limit= "10"
                    headData = {guardsTableHead}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {guardsList}
                    renderBody = {(item, index) => renderBody(item, index)}
                />
            </Card2>

            Dialog for Adding Guards
            {/* <AlertDialog
              open={open}
              onClose={handleClickClose}
              title={"New Guard Entry"}
            >
                <DialogContent>
                    <FromBx>
                        <span>Full Name</span>
                        <Input type = "text" placeholder = "Enter Guard Name" />
                    </FromBx>
                    <FromBx>
                        <span>Other Names</span>
                        <Input type = "text" placeholder = "Enter Other Name" />
                    </FromBx>
                    <FromBx>
                        <span>Date of Birth</span>
                        <DataPicker/>
                    </FromBx>
                    <FromBx>
                        <span>L.G.A</span>
                        <Input type = "text" placeholder = "Enter Local Government Area" />
                    </FromBx>
                    <FromBx>
                        <span>Blood Group</span>
                        <Input type = "text" placeholder = "Enter Blood Group" />
                    </FromBx>
                    <FromBx>
                        <span>Address</span>
                        <Input type = "text" placeholder = "Enter Address" />
                    </FromBx>
                    <FromBx>
                        <span>State of Origin</span>
                        <Input type = "text" placeholder = "Enter Stat" />
                    </FromBx>
                    
                    <span>Sex</span>
                    <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                        <FormControlLabel value="female" control={<Radio />} label="Female" className="radioButton" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    <FromBx>
                        <span>Religion</span>
                        <Input type = "text" placeholder = "Enter Religion" />
                    </FromBx>

                    <FromBx>
                        <span>Marital Status</span>
                        <Input type = "text" placeholder = "Enter Marital Status" />
                    </FromBx>
                    <FromBx>
                        <span>Mobile Number</span>
                        <Input type = "text" placeholder = "Enter Mobile Number" />
                    </FromBx>
                    <FromBx>
                        <span>Wife Name</span>
                        <Input type = "text" placeholder = "Enter Wife Name" />
                    </FromBx>
                    <FromBx>
                        <span>Phone</span>
                        <Input type = "text" placeholder = "Enter Mobile Number" />
                    </FromBx>
                    <FromBx>
                        <span>Next of Kin</span>
                        <Input type = "text" placeholder = "Enter Next of Kin" />
                    </FromBx>
                    <FromBx>
                        <span>Phone</span>
                        <Input type = "text" placeholder = "Enter Mobile Number" />
                    </FromBx>
                    <FromBx>
                        <span>Educational Qualification</span>
                        <Input type = "text" placeholder = "Enter Qualification" />
                    </FromBx>
                    <FromBx>
                        <span>Previous Employer</span>
                        <Input type = "text" placeholder = "Enter Recent Work" />
                    </FromBx>
                    <FromBx>
                        <span>Address</span>
                        <Input type = "text" placeholder = "Enter Address" />
                    </FromBx>
                    <FromBx>
                        <span>Reason You Left</span>
                        <Input type = "text" placeholder = "Example Theft....." />
                    </FromBx>
                    <FromBx>
                        <span>Medical Conditions</span>
                        <Input type = "text" placeholder = "Enter Medical Condition" />
                    </FromBx>
                    <FromBx>
                        <span>Father Name</span>
                        <Input type = "text" placeholder = "Enter Father Name" />
                    </FromBx>
                    <FromBx>
                        <span>Phone</span>
                        <Input type = "text" placeholder = "Enter Mobile Number" />
                    </FromBx>
                    <FromBx>
                        <span>Address</span>
                        <Input type = "text" placeholder = "Enter Address" />
                    </FromBx>
                    <FromBx>
                        <span>Mother Name</span>
                        <Input type = "text" placeholder = "Enter Mother Name" />
                    </FromBx>
                    <FromBx>
                        <span>Phone</span>
                        <Input type = "text" placeholder = "Enter Mobile Number" />
                    </FromBx>
                    <FromBx>
                        <span>Address</span>
                        <Input type = "text" placeholder = "Enter Address" />
                    </FromBx>
                    
                    <FromBx>
                        <span>Mark On The Body</span>
                        <Input type = "text" placeholder = "Enter Yes or No" />
                    </FromBx>
                    <FromBx>
                        <span>If yes, Specify</span>
                        <Input type = "text" placeholder = "Kindly Specify" />
                    </FromBx>
                    <FromBx>
                        <span>Union or Society</span>
                        <Input type = "text" placeholder = "Yes or No" />
                    </FromBx>
                    <FromBx>
                        <span>If yes, Specify</span>
                        <Input type = "text" placeholder = "Kindly Specify" />
                    </FromBx>

                </DialogContent>
                <DialogActions>
                <FromBx>
                    <Button>Sumbit</Button>
                </FromBx>
                </DialogActions>
            </AlertDialog> */}

            <AlertDialog
                open={open}
                onClose={handleClickClose}
                title={"New Guard Entry"}
            >   
            {/* <CameraShot/> */}
            </AlertDialog>
        </>
    );
}

export default Guards

const CameraShot = () => {
    const videoRef = useRef(null);
    const photoRef = useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);


    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 1920,
                height: 1080
            }
        }).then(
            stream => {
                let video = videoRef.current
                video.srcObject = stream;
                video.play();
            }
        ).catch(err => {
            console.error(err);
        })
    }

    const takePhoto = () => {
        let width = 414;
        let height = width / (16/9);

        let video = videoRef.current;
        let photo = photoRef.current;

        // photo.width = 414;
        // photo.height = height;

        let ctx = photo.getContext('2d');
        ctx.drawImage(video, 0,0, width, height);
        setHasPhoto(true);
    }

    // useEffect(() => {
    //     getVideo();
    // }, [videoRef])
    return (
        <>
            <CameraContainer>
                <Camera>
                    <video ref={videoRef}></video>
                    <button onClick={takePhoto}>SNAP!</button>
                </Camera>
                <div className={'result' + (hasPhoto ? 'hasPhoto' : "")}>
                    <Canvas></Canvas>
                    <button>Close</button>
                </div>
            </CameraContainer>
        </>
    )
}


