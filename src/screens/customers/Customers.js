import React, {useState} from 'react'
import Table from "../../components/table/Table"
import { Card2 } from '../dashboard/dash_element'
import {FiEdit, FiTrash2} from "react-icons/fi"
import {AiOutlineFolderView, AiOutlineUserAdd} from "react-icons/ai"
import ActionButton from "../../components/action-button/ActionButton"
import { AddCustomer, HeaderContainer, PageHeader } from './StyledCustomers'
import customersList from "../../assets/JsonData/customers-list.json"
import AlertDialog from "../../components/dialog/Dialog"
import { Button, FromBx, Input } from '../login/Login__element'
import {  DialogActions, DialogContent } from '@mui/material'

const customersTableHead = [
    "",
    "name",
    "location",
    "custodian",
    "mobile",
    "guard",
    "amount paid",
    "action"
]

const renderHead = (item, index) => <th key={index}>{item}</th>


const Customers = ({onClick}) => {
    const [open, setOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false)
    
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    }

    const handleEditOpen = () => {
        setEditOpen(true);
    }

    const handleEditClose = () => {
        setEditOpen(false);
    }
    const renderBody = (item, index) => (
        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.custodian}</td>
            <td>{item.mobile}</td>
            <td>{item.guard}</td>
            <td>{item.amount}</td>
            <td>
                <span style={{display: "flex"}}>
                    <ActionButton
                        icon = {<AiOutlineFolderView/>}
                        type = "view"
                    />
                    <ActionButton
                        icon = {<FiEdit/>}
                        type = "edit"
                        onClick={handleEditOpen}
                    />
                    <ActionButton
                        icon = {<FiTrash2/>}
                        type = "warning"
                    />
                </span>
            </td>
        </tr>
    ) 
    


    return (
        <>
            <HeaderContainer>
                <PageHeader>Customers</PageHeader>
                <AddCustomer  onClick={handleClickOpen}>
                    <AiOutlineUserAdd/>
                </AddCustomer>
            </HeaderContainer>
            <Card2>
                <Table
                    limit= "10"
                    headData = {customersTableHead}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {customersList}
                    renderBody = {(item, index) => renderBody(item, index)}
                />
            </Card2>

            {/* Dialog for Adding Customers */}
            <AlertDialog
                open={open}
                onClose={handleClickClose}
                title={"Customer Details."}
            >
                <DialogContent>
                    <FromBx>
                        <span>Customer name</span>
                        <Input type = "text" placeholder = "Enter Name" />
                    </FromBx>
                    <FromBx>
                        <span>Location</span>
                        <Input type = "text" placeholder = "Enter Location" />
                    </FromBx>
                    <FromBx>
                        <span>Custodian name</span>
                        <Input type = "text" placeholder = "Enter Custodian Name" />
                    </FromBx>
                    <FromBx>
                        <span>Mobile number</span>
                        <Input type = "text" placeholder = "Enter Mobile" />
                    </FromBx>
                    <FromBx>
                        <span>Amount paid</span>
                        <Input type = "text" placeholder = "Enter Amount" />
                    </FromBx>
                    <FromBx>
                        <span>Guard</span>
                        <Input type = "text" placeholder = "Total Guards" />
                    </FromBx>
                </DialogContent>
                <DialogActions>
                <FromBx>
                    <Button>Sumbit</Button>
                </FromBx>
                </DialogActions>
            </AlertDialog>

            {/* Dialog to edit Customer */}
            <AlertDialog
                open={editOpen}
                onClose={handleEditClose}
                title={"Edit Customer Details."}
            >
                <DialogContent>
                    <FromBx>
                        <span>Customer name</span>
                        <Input type = "text" placeholder = "Enter Name" />
                    </FromBx>
                    <FromBx>
                        <span>Location</span>
                        <Input type = "text" placeholder = "Enter Location" />
                    </FromBx>
                    <FromBx>
                        <span>Custodian name</span>
                        <Input type = "text" placeholder = "Enter Custodian Name" />
                    </FromBx>
                    <FromBx>
                        <span>Mobile number</span>
                        <Input type = "text" placeholder = "Enter Mobile" />
                    </FromBx>
                    <FromBx>
                        <span>Amount paid</span>
                        <Input type = "text" placeholder = "Enter Amount" />
                    </FromBx>
                    <FromBx>
                        <span>Guard</span>
                        <Input type = "text" placeholder = "Total Guards" />
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

export default Customers
