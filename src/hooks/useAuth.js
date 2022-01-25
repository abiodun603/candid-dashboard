import {useState, useContext} from "react"
import {useHistory} from "react-router-dom"
import axios from "axios"
import {UserContext} from "./UserContext"

export default function useAuth(){
    // let history = useHistory();

    // const {setUser} = useContext(UserContext);
    // const [error , setError] = useState(null);

    // set user in context and push them to home
    // const setUserContext = async () => {
    //     return await axios.get("https://candid-nest.herokuapp.com/auth/login").then(res => {
    //         setUser(res.data.currentUser);
    //         history.push("/home");
    //     }).catch((err) => {
    //         setError(err.response.data)
    //     })
    // }

    // return (
    //     <>
    //     </>
    // )
}