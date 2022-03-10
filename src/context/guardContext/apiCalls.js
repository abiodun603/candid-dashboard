import React from "react"
import axios from "axios"
import { createGuardFailure, createGuardStart, createGuardSuccess, getGuardFailure, getGuardStart, getGuardSuccess, deleteGuardSuccess,deleteGuardStart, deleteGuardFailure } from "./GuardAction";
import swal from "sweetalert"
import {useHistory} from "react-router-dom"

// get staff
export const getGuard = async(dispatch)=> {
    dispatch(getGuardStart());
    try {
        const res = await axios.get("https://candid-nest.herokuapp.com/guards",
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
                }
            }
        )
        dispatch(getGuardSuccess(res.data)) 
        console.log(res.data)
    }catch(err) {
        dispatch(getGuardFailure());
    }
}
// create guard post
export const createGuard = async(guard, dispatch)=> {
    // const history = useHistory()
    console.log(JSON.parse(localStorage.getItem("user")).access_token)

    dispatch(createGuardStart());
    console.log(guard)
    try {
        const res = await axios.post("https://candid-nest.herokuapp.com/guards", guard ,
            {
                headers: {
                    "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token,
                }
            }
        )
        console.log(res)
        swal({
            title: "Are you sure?",
            text: "New guard post have been uploaded successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            // buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
            } else {
              swal("Your imaginary file is safe!");
            }
        });
        dispatch(createGuardSuccess(res.data)) 
    }catch(err) {
        dispatch(createGuardFailure());
    }
}

// delete guard post
export const deleteGuard = async (id, dispatch) => {
    dispatch(deleteGuardStart());

    try{
        const res = await axios.delete("https://fixontime.herokuapp.com/posts/" + id, 
        {
            headers: {
                "Authorization": "Bearer " + JSON.parse(localStorage.getItem("user")).access_token
            }
        })
        dispatch(deleteGuardSuccess(id));
        swal({
            title: "Are you sure?",
            text: "Guard post have been de;eted successfully",
            icon: "success",
            confirmButtonColor: '#030762',
            // buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
                // history.push("/guard")
            } else {
              swal("Your imaginary file is safe!");
            }
        }); 
    }catch (err) {
        dispatch(deleteGuardFailure())
    }
}   