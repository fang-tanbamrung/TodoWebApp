import { userConstant } from '../constants/user.constants'
import { todoConstants } from '../constants/todo.constant';
const { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
        REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS,
        SET_REGISTER_STATE } = userConstant;
const { LOAD_TODO, CLEAR_TODO } = todoConstants;

const api = 'https://mighty-mountain-98451.herokuapp.com';


export const login = (email,password) => {

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
                {
                    dispatch({type:LOGIN_FAILURE, err:'Unauthorized'})
                    alert('Unauthorized');
                }
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
        dispatch({type:CLEAR_TODO});
        dispatch({type:LOGOUT});
    }
}

export const linkToRegister = () => {
    return{
        type: SET_REGISTER_STATE
    }
}
