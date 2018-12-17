import { userConstant } from '../constants/user.constants';

const { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT,
        REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, 
        SET_REGISTER_STATE } = userConstant;

const initialState = { loggingIn: false, err:{} }

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        loggingIn:false
      };
    case LOGIN_SUCCESS:
      return {
        loggingIn: true,
        email:action.data.email
      };
    case LOGIN_FAILURE:
      return {
        loggingIn:false,
        err:action.err
      };
    case LOGOUT:
      return {
        loggingIn: false
      };
    default:
      return state
  }
}

const initialRegisterState = {
  state:'',
  isRegisterDone:false
}

export const register = (state = initialRegisterState, action = {}) => {
  switch (action.type){
    case REGISTER_REQUEST:
      return Object.assign({}, state,{state:'REGISTER_REQUEST'})
    case REGISTER_SUCCESS:
      return Object.assign({}, state,{isRegisterDone:true,state:'REGISTER_SUCCESS'})
    case REGISTER_FAILURE:
      return Object.assign({}, state,{isRegisterDone:false,state:'REGISTER_FAIL'})
    case SET_REGISTER_STATE:
      return Object.assign({}, state, {isRegisterDone:false})
    default :
      return state
  }
}