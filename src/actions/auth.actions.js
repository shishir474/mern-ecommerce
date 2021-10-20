import axiosInstance from "../helpers/axios"
import { authConstants } from "./constants"

export const login = (user) => {

    return async (dispatch) => {

        // making api call
        dispatch({ type: authConstants.LOGIN_REQUEST});
        const res = await axiosInstance.post('/admin/signin', {   // have specified the base Url in axiosInstance
            ...user
        })
        
        if (res.status === 200){
            const {token, user} = res.data;
            localStorage.setItem('token', token);  // save the token in our localStorage for future purpose
            dispatch({ 
                type: authConstants.LOGIN_SUCCESS, 
                payload: {
                    token, user
                }
             });
        }
        else{
            if(res.status === 400){
                dispatch({
                    type: authConstants.LOGIN_FAILURE,
                    payload: {
                        error: res.data.error
                    }
                })
            }
        }

    }
}