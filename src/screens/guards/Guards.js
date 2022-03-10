import React, { useState, useEffect, useReducer, useContext } from 'react'
import guardsList from "../../assets/JsonData/guards-list"
import ActionButton from '../../components/action-button/ActionButton'
import Table from "../../components/table/Table"
import {Camera, CameraContainer, Canvas} from "./StyledGuards"
import { PageHeader } from './StyledGuards'
import {FiEdit, FiTrash2} from "react-icons/fi"
import {AiOutlineFolderView, AiOutlineUserAdd} from "react-icons/ai"
import { Card2 } from '../dashboard/dash_element'
import {  DialogActions, DialogContent, TextField } from '@mui/material'
import { Button, FromBx, FormWrapper2, Input} from '../login/Login__element'
import AlertDialog from "../../components/dialog/Dialog"
import { AddCustomer, HeaderContainer } from './StyledGuards'
// import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns'
// import LocalizationProvider from '@mui/lab/LocalizationProvider'
// import WebCamCapture from "../../components/webcam/Webcam"
// Radio button import
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import styled from "styled-components"
// react use form hook lib
import { useForm } from "react-hook-form";
import axios from "axios"
// React Web Cam Lib
import Webcam from "react-webcam";
import { initialState, reduce } from '../../hooks/GetGuard_Reduce'
import { createGuard } from '../../context/guardContext/apiCalls'
import { GuardContext } from '../../context/guardContext/GuardContext'



const guardsTableHead = [
    "",
    "name",
    "mobile",
    "sex",
    "religion",
    "status",
    "action"
]


const renderHead = (item, index) => <th key={index}>{item}</th>



const WebcamComponent = () => <Webcam/>;

const videoConstraints = {
    width: "100%",
    height: "100%",
    facingMode: "selfie"
};


const Guards = () => {
    const [open, setOpen] = useState(false);
    const [guardLists, setGuardLists] = useState([]);
    const [image,setImage]=useState('');
    const webcamRef = React.useRef(null);
    // react user form hook lib
    const { register, handleSubmit } = useForm({ shouldUseNativeValidation: true });
    // const [state, dispatch] = useReducer(reduce, initialState)  
    
    const {dispatch} = useContext(GuardContext)

    /*** Alert Dialog ***/
    const handleClickClose = () => {
        setOpen(false);
    }
    const handleClickOpen = () => {
        setOpen(true);
    }

    // WebCam OnCapture
    const capture = React.useCallback(
        () => {
            // const imageSrc = webcamRef.current.getScreenshot();
						const imageSrc = webcamRef.current;
            setImage(imageSrc)
        },
        [webcamRef]
    );
		console.log(image);
    // pass image as object
    const captureImage = {
        image: image
    }

    // console.log(captureImage);

    const onSubmit = async (data, cam) => { 
        const formData = new FormData();
				formData.append('image', data.image)

				formData.append('signature', data.picture);
        formData.append('surname', data.guard_name)
        formData.append('otherName', data.other_name)
        formData.append('email', data.email);
        formData.append('dob', data.date);
        formData.append('age', data.age);
        formData.append('phoneNo', data.guard_mobile)
        formData.append("bloodGroup", data.blood);
        formData.append("address", data.address);
        formData.append("sex", "male");
        formData.append('religion', data.religion);
        formData.append('maritalStatus', data.marital);
        formData.append('wifeName', data.wife);
        formData.append('wifePhoneNumber', data.wife_phone);
        formData.append('nextOfKin', data.kin);
        formData.append('nextOfKinPhoneNumber', data.kin_phone);
        formData.append('eduQualification', data.education);
        formData.append('previousEmployer', data.previous_emp);
        formData.append('previousEmployerAddress', data.pre_emp_address);
        formData.append('resignationReason', data.reason);
        formData.append('medicalCondition', data.medical);
        formData.append('fatherName', data.father);
        formData.append('fatherNameAddress', data.father_address);
        formData.append('fatherNamePhoneNumber', data.father_phone);
        formData.append('motherName', data.father);
        formData.append('motherNameAddress', data.father_address);
        formData.append('motherNamePhoneNumber', data.father_phone);
        formData.append('bodyMark', data.guard_mark);
        formData.append('bodyMarkPart', data.mark_specify);
        formData.append('society', data.society);
        // specify society field is not specify
        formData.append('vetStatus', 1);
        
        // console.log(data)
        createGuard(formData, dispatch);

    };

    const token = localStorage.getItem("token");
    // console.log(token);

    // fetch guards data using axios and reducer
    useEffect(() => { 
        console.log(token)
        axios.get('https://candid-nest.herokuapp.com/guards',
            {
							headers: {
								"Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
						}            }
        ).then(response => {  
                // console.log(response.data)
                setGuardLists(response.data)
                dispatch({ 
                    type: 'OnSuccess', 
                    payload: response.data
                })  
                    throw response
                }).catch(error => {  
                    dispatch({ type: 'OnFailure' })  
                })  
    }, [])  

    console.log(guardLists)

    const renderBody = (item, index) => (

        <tr key={index}>
            <td>{item.id}</td>
            <td>{item.otherName}</td>
            <td>{item.phoneNo}</td>
            <td>{item.sex}</td>
            <td>{item.religion}</td>
            <td>{item.maritalStatus}</td>

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

    return (
        <>
            <HeaderContainer>
                <PageHeader>Guards</PageHeader>
                <AddCustomer  onClick={handleClickOpen}>
                    <AiOutlineUserAdd/>
                </AddCustomer>
            </HeaderContainer>
            {/* {state.user} */}        
          
            <Card2>
                <Table
                    // limit= "10"
                    headData = {guardsTableHead}
                    renderHead = {(item, index) => renderHead(item, index)}
                    bodyData = {guardLists}
                    renderBody = {(item, index) => renderBody(item, index)}
                />
            </Card2>

            {/* Dialog for Adding Guards */}
            <AlertDialog
              open={open}
              onClose={handleClickClose}
              title={"New Guard Entry"}
            >
                <FormWrapper2 onSubmit={handleSubmit(data => onSubmit(data, captureImage))}>
                    <DialogContent>
                        <FromBx>
                            <span>Full Name</span>
                            <Input type = "text" placeholder = "Enter Guard Name" name="guard_name"
                                   {...register("guard_name")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Other Names</span>
                            <Input type = "text" placeholder = "Enter Other Name" 
                                   {...register("other_name")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Email Address</span>
                            <Input type = "text" placeholder = "Enter Email Address" 
                                   {...register("email")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Date of Birth</span>
                            <input type="date" 
                              {...register("date")} 

                            />
                        </FromBx>
                        <FromBx>
                            <span>Age</span>
                            <Input type="text" placeholder = "Enter Guard Age"
                              {...register("age")} 

                            />
                        </FromBx>
                        <FromBx>
                            <span>L.G.A</span>
                            <Input type = "text" placeholder = "Enter Local Government Area" 
                               {...register("lga")} 

                            />
                        </FromBx>
                        <FromBx>
                            <span>Blood Group</span>
                            <Input type = "text" placeholder = "Enter Blood Group" 
                               {...register("blood")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Address</span>
                            <Input type = "text" placeholder = "Enter Address" 
                               {...register("address")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>State of Origin</span>
                            <Input type = "text" placeholder = "Enter State" 
                               {...register("state")} 
                            />
                        </FromBx>
                        <span>Sex</span>
                        <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
                            <FormControlLabel value="female" control={<Radio />} label="Female" className="radioButton" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                        <FromBx>
                            <span>Religion</span>
                            <Input type = "text" placeholder = "Enter Religion"
                               {...register("religion")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Marital Status</span>
                            <Input type = "text" placeholder = "Enter Marital Status" 
                               {...register("marital")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Mobile Number</span>
                            <Input type = "text" placeholder = "Enter Mobile Number" 
                               {...register("guard_mobile")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Wife Name</span>
                            <Input type = "text" placeholder = "Enter Wife Name" 
                               {...register("wife")} 

                            />
                        </FromBx>
                        <FromBx>
                            <span>Phone</span>
                            <Input type = "text" placeholder = "Enter Mobile Number" 
                               {...register("wife_phone")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Next of Kin</span>
                            <Input type = "text" placeholder = "Enter Next of Kin" 
                               {...register("kin")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Phone</span>
                            <Input type = "text" placeholder = "Enter Mobile Number" 
                               {...register("kin_phone")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Educational Qualification</span>
                            <Input type = "text" placeholder = "Enter Qualification" 
                               {...register("education")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Previous Employer</span>
                            <Input type = "text" placeholder = "Enter Recent Work" 
                               {...register("previous_emp")} 
                            /> 
                        </FromBx>
                        <FromBx>
                            <span>Address</span>
                            <Input type = "text" placeholder = "Enter Address"
                               {...register("pre_emp_address")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Reason You Left</span>
                            <Input type = "text" placeholder = "Example Theft....." 
                               {...register("reason")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Medical Conditions</span>
                            <Input type = "text" placeholder = "Enter Medical Condition" 
                               {...register("medical")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Father Name</span>
                            <Input type = "text" placeholder = "Enter Father Name" 
                               {...register("father")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Phone</span>
                            <Input type = "text" placeholder = "Enter Mobile Number" 
                               {...register("father_phone")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Address</span>
                            <Input type = "text" placeholder = "Enter Address" 
                               {...register("father_address")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Mother Name</span>
                            <Input type = "text" placeholder = "Enter Mother Name" 
                               {...register("mother")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Phone</span>
                            <Input type = "text" placeholder = "Enter Mobile Number" 
                               {...register("mother_phone")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Address</span>
                            <Input type = "text" placeholder = "Enter Address" 
                               {...register("mother_address")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Mark On The Body</span>
                            <Input type = "text" placeholder = "Enter Yes or No" 
                               {...register("guard_mark")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>If yes, Specify</span>
                            <Input type = "text" placeholder = "Kindly Specify" 
                               {...register("mark_specify")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>Union or Society</span>
                            <Input type = "text" placeholder = "Yes or No"
                               {...register("society")} 
                            />
                        </FromBx>
                        <FromBx>
                            <span>If yes, Specify</span>
                            <Input type = "text" placeholder = "Kindly Specify"
                           {...register("society_specify ")} 

                            />
                        </FromBx>
                        <FromBx>
                            <span>Capture Signature</span>
                            <input type="file" {...register("picture")}/>
                        </FromBx>

												<FromBx>
                            <span>Capture Signature</span>
                            <input type="file" {...register("image")}/>
                        </FromBx>

                        {/* WebCamera */}
                        {/* {
                            image == "" ? <Webcam
                                audio={false}
                                height = {"100%"}
                                ref= {webcamRef}
                                register = {image} 
                                screenshotFormat="image/jpeg"
                                width={"100%"}
                                // {...register("image")}
                                videoConstraints = {videoConstraints}
                            /> : <img src={image} />
                        }
                        <div>
                            {
                                image!=''?
                                <button 
                                    onClick={(e)=>{e.preventDefault();setImage('')}}
                                    className="webcam-btn"
                                >
                                    Retake Image
                                </button> :
                                <button 
                                    type = "submit"
                                    onClick={(e)=>{e.preventDefault();capture();}}
                                    className="webcam-btn"
                                    // {...register({image})}
                                >
                                    Capture
                                </button>
                            }
                        </div> */}

                    </DialogContent>
                    <DialogActions>
                    <FromBx>
                        <Button type="submit">Sumbit</Button>
                    </FromBx>
                    </DialogActions>
                </FormWrapper2>
            </AlertDialog>

            {/* <AlertDialog
                open={open}
                onClose={handleClickClose}
                title={"New Guard Entry"}
            >   
            </AlertDialog> */}
        </>
    );
}

export default Guards


// const DataPicker = () => {
//     const [value, setValue] = useState(new Date());
//     return (
//         <>
//             <LocalizationProvider dateAdapter = {AdapterDateFns}>
//                 <MobileDatePicker
//                     views={['day']}
//                     label="Just date"
//                     value={value}
//                     onChange={(value) => {
//                         setValue(value);
//                     }}
//                     renderInput={(params) => <StyledTextField disabled fullWidth variant="outlined" {...params} className="dateInput"/>}
//                 />
//             </LocalizationProvider> 
//         </>
//     )
// }

const StyledTextField = styled(TextField)`
    & .MuiOutlinedInput-notchedOutline  {
        border-color: oranage;
        position: absolute;
        top: -15px;
        border: 2px solid #D0D0D0;
        border-radius: 10px;
        padding :  0 !important;

        &:hover{
            border: unset;
            border: 2px solid #D0D0D0;
            outline: unset
        }
    }

    & .MuiOutlinedInput-root.MuiInputBase-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.css-md26zr-MuiInputBase-root-MuiOutlinedInput-root {
        font-size: 15px !important;
        padding-left: 8px;
        color: #455560;

       
    }


    & input#mui-2  {
        padding: 12px 12px;
    }

    & {
        margin-top: 8px;
    }
`


