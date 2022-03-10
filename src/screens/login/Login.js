import React, {useState, useEffect, useContext} from 'react'
// import useAuth from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import {LoginBanner, LoginForm, LoginWrapper,FormWrapper, FromBx, Input, FromBxRem, InputCheck, Button} from './Login__element'
import axios from "axios"

// import {AuthContext} from "../../App"

// new CONFIGUARATION
import { login } from "../../context/authContext/apiCalls"
import {AuthContext} from "../../context/authContext/AuthContext"
const Signin = () => {
    // const {dispatch} =  React.useContext(AuthContext)
    const [values, handleChange] = useForm({
        email : "",
        password: ""
    });
    const [roleId, setRoleId] = useState(1);

    // New CONFIGURATION
    const {user, isFetching, dispatch} = useContext(AuthContext);
    console.log(isFetching)
    const handleLogin = (e) => {
        e.preventDefault();
        console.log(values)
        const email = values.email
        const password = values.password
        login({email, password, roleId}, dispatch);
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
                            <Button type="submit">
                                {isFetching ? (
                                    "mnmnmn"
                                ): "Login"}
                            </Button>
                        </FromBx>
                    </LoginForm>
                </FormWrapper>
            </LoginWrapper>
        </>
    )
}

export default Signin;
