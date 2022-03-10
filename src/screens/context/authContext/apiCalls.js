import axios from "axios"
import { loginFailure, loginStart, loginSuccess} from "./AuthActions"

export const login = async (user, dispatch) => {
    dispatch(loginStart);
    try {
        const res = await axios({
                method: "post",
                url: "https://candid-nest.herokuapp.com/auth/login",
                data: {
                    email: user.email,
                    password: user.password,
                    roleId: user.roleId
                }
            }).then((response) => {
                console.log(response)
                dispatch(loginSuccess(response.data));
            })
            // console.log(user)
            // console.log(res.data)
    }catch(err){
        dispatch(loginFailure)
    }
}