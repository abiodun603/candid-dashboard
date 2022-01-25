import React, {useState, useEffect} from 'react'
// import useAuth from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button} from './Login__element'
import axios from "axios"
import {AuthContext} from "../../App"
const Signin = () => {
    const {dispatch} =  React.useContext(AuthContext)
    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);

    const [token, setToken] = useState("")

    // const {registerLogin, error} = useAuth();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(values);
        // await registerLogin(values);

        //  fetch("https://candid-nest.herokuapp.com/auth/login", {
        //     method: "post",
        //     mode: "no-cors",
        //     body: JSON.stringify({
        //         email: values.email,
        //         password: values.password,
        //         roleId: 1
        //     })
        //  }).then(data => {
        //      if(res.ok) {
        //          return res.json();
        //     }
        //     throw res; 
        //  }).then(DataTransferItemList => {
        //      console.log("you can logged IN")
        //     dispatch({
        //         type: "LOGIN",
        //         payload: data
        //     })
        //  })
        //  .catch(err => {
        //     console.log(err)
        //  })
        await axios({
            method: "post",
            url: "https://candid-nest.herokuapp.com/auth/login",
            data: {
                email: values.email,
                password: values.password,
                roleId: 1
            }
        }).then(res => {
            dispatch({
                type: "LOGIN",
                payload: res.data
            })
                throw res; 
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    return (
        <>
            <LoginWrapper>
                <LoginBanner>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/4b55bc102925351.5f41b2583a8db.png" alt="name"/>
                </LoginBanner>
                <FormWrapper onSubmit = {handleLogin}>
                    <LoginForm>
                        <h2>Candid Login</h2>
                        <FromBx>
                            <span>Email</span>
                            <Input 
                                type = "text" 
                                placeholder = "Enter Email Address"
                                name = "email"
                                value = {values.email}
                                onChange = {handleChange}
                            />
                        </FromBx>

                        <FromBx>
                            <span>Password</span>
                            <Input 
                                name= "password"
                                type = "text" 
                                placeholder = "*****" 
                                value = {values.password}
                                onChange = {handleChange}    
                            />
                        </FromBx>

                        <FromBxRem >
                            <label><InputCheck type="checkbox" name =""/> Remember me</label>
                        </FromBxRem>

                        <FromBx>
                            <Button type="submit">Login</Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}

export default Signin;
