import React, {useState} from "react"
import Button from "../../components/button/Button"
import { Card2 } from '../dashboard/dash_element'
import Table from "../../components/table/Table"
import {FiEdit, FiTrash2} from "react-icons/fi"
import {AiOutlineFolderView} from "react-icons/ai"
import ActionButton from "../../components/action-button/ActionButton"
import staffsList from "../../assets/JsonData/staff-list"
import {PageHeader, AddCustomer, HeaderContainer } from "../guards/StyledGuards"
import {AiOutlineUserAdd} from "react-icons/ai"
import {  DialogActions, DialogContent } from '@mui/material'
import { FromBx, Input } from "../login/Login__element"
import AlertDialog from "../../components/dialog/Dialog"



const staffsTableHead = [
    "",
    "staff name",
    "staff position",
    "action"
]

const renderHead = (item, index) => <th key={index}>{item}</th>

const renderBody = (item, index) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.position}</td>
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

const Staff = () => {
    const [open, setOpen] = useState(false);
    // const [editOpen, setEditOpen] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    }

    // const handleEditOpen = () => {
    //     setEditOpen(true);
    // }

    // const handleEditClose = () => {
    //     setEditOpen(false);
    // }
    return (
        <>
            <HeaderContainer>
                <PageHeader>Staff</PageHeader>
                <AddCustomer  onClick={handleClickOpen}>
                    <AiOutlineUserAdd/>
                </AddCustomer>
            </HeaderContainer>

            {/* Staff Card */}
            <Card2>
                <Table
                    limit = "8"
                    headData = {staffsTableHead}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {staffsList}
                    renderBody = {(item, index) => renderBody(item, index)}
                />
            </Card2>

            {/* Dialog for Adding Staff */}
            <AlertDialog
                open={open}
                onClose={handleClickClose}
                title={"Enter New Staff"}
            >
                <DialogContent>
                    <FromBx>
                        <span>Staff Id</span>
                        <Input type = "text" placeholder = "Enter Staff Id" />
                    </FromBx>
                    <FromBx>
                        <span>Staff Name</span>
                        <Input type = "text" placeholder = "Enter Name" />
                    </FromBx>
                    <FromBx>
                        <span>Staff Position</span>
                        <Input type = "text" placeholder = "Enter Position" />
                    </FromBx>
                    <FromBx>
                        <span>Staff Location</span>
                        <Input type = "text" placeholder = "Enter Address" />
                    </FromBx>
                </DialogContent>
                <DialogActions>
                <FromBx>
                    <Button>Sumbit</Button>
                </FromBx>
                </DialogActions>
            </AlertDialog>
        </>
    )
}

export default Staff