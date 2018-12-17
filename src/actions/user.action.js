import { userConstant } from '../constants/user.constants'
import { todoConstants } from '../constants/todo.constant';
const { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
        REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } = userConstant;
const { LOAD_TODO, CLEAR_TODO } = todoConstants;

const api = 'http://localhost:3000';


export const login = (email,password) => {

    console.log(email);
    console.log(password);
    return dispatch => {
        dispatch({type: LOGIN_REQUEST});
        fetch(`${api}/signin`,{
            method:'post',
            headers: { 'Content-Type': 'application/json'},
            body:JSON.stringify({ 
                email, 
                password
            })
        })
            .then(res => res.json())
            .then(data => {
                if(data.id){
                    dispatch({ type:LOAD_TODO, data});
                    dispatch({type: LOGIN_SUCCESS,data});
                }
                if(data === 'Unauthorized')
                {alert('Unauthorized');}
            })
            .catch(err => dispatch({type:LOGIN_FAILURE, err}))
    }

}

export const register = ( name, email, password ) => {
    return dispatch => {
        dispatch({type: REGISTER_REQUEST});
        fetch(`${api}/register`,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(res => res.json())
            .then( data => {
                if(data.id){
                    dispatch({type:REGISTER_SUCCESS});
                }
                if(data === 'unable to register'){
                    alert(`This email was used`)   
                }
            })
            .catch(err => dispatch({type:REGISTER_FAILURE, err}))
    }
}

export const logout = () => {
    return dispatch => {
        dispatch({type:LOGOUT});
        dispatch({type:CLEAR_TODO});
    }
}
