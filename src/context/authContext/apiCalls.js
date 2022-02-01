import axios from "axios"
import { loginFailure, loginStart, loginSuccess} from "./AuthActions"

export const login = async(user, dispatch) => {
    const show= dispatch(loginStart);
    // console.log(show)
    try {
        const res = await axios({
                method: "post",
                url: "https://candid-nest.herokuapp.com/auth/login",
                data: {
                    email: user.email,
                    password: user.password,
                    roleId: user.roleId
                }
            })
            console.log(user)
            // console.log(res.data)
        dispatch(loginSuccess(res.data));
    }catch(err){
        dispatch(loginFailure)
    }
}