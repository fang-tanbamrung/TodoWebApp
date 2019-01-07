import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../actions/user.action';

const mapStateToProps = state => {
    return{
        isRegisterDone:state.register.isRegisterDone,
        state: state.register.state
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        register: (name,email,password) => dispatch(register(name,email,password))
    }
}

const inintialState = {
    name:'',
    password:'',
    rpassword:'',
    email:'',
    submit:false
}

class Register extends React.Component {
    constructor(props){
        super(props)
        this.state = inintialState

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState( {[name]: value})
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { name, password, email, rpassword } = this.state;
        this.setState({submit:true});
        if( name && password && email){
            if(password === rpassword){
                this.props.register(name,email,password);
            }
        }
    }

    render(){
        const { handleSubmit, handleChange } = this;
        const { name, password, email, rpassword, submit } = this.state;
        const { isRegisterDone, state } = this.props
        return(
            <div >
                {!isRegisterDone?
                <div className = 'flex justify-center white mt4'>
                    <form onSubmit = { handleSubmit } className = 'pa3 ba br2'>
                        <div className = 'ma2'>
                            <label htmlFor = 'name'>
                                {'Name :'}
                            </label><br/>
                            {submit && !name &&
                                <div className="ba br2 bg-white red">{'Name is required'}</div>
                            }
                            <input onChange = {handleChange} name = 'name' className = 'br2 mt1' type = 'text'/>
                        </div>
                        <div className = 'ma2'>
                            <label htmlFor = 'email'>
                                {'Email :'}
                            </label><br/>
                            {submit && !email &&
                                <div className="ba br2 bg-white red">{'Email is required'}</div>
                            }
                            <input onChange = {handleChange} type = 'email' name = 'email' className = 'mt1 br2'/>
                        </div>
                        <div className = 'ma2'>
                            <label htmlFor = 'password'>
                                {'Password :'}
                            </label><br/>
                            {submit && !password &&
                                <div className="ba br2 bg-white red">{'Password is required'}</div>
                            }
                            <input onChange = {handleChange} type = 'password' name = 'password' className = 'mt1 br2'/>
                        </div>
                        <div className = 'ma2'>
                            <label htmlFor = 'rpassword'>
                                {'Confirm Password :'}
                            </label><br/>
                            {rpassword === password?
                            ''
                            :<div className = 'ba br2 bg-white red'>
                                {'Password must match'}  
                            </div>}
                            <input onChange = {handleChange} type = 'password' name = 'rpassword' className = 'mt1 br2'/>
                        </div>
                        <div>
                            {   
                                state !== 'REGISTER_FAIL' && name && rpassword && email && password && submit && 
                                <div className = 'flex justify-center'>
                                    <img alt='loading-gif' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </div>
                            }
                        </div>
                        <div className = 'ma2 flex justify-center '>
                            <button className='br2 bg-white-70'>
                                {'Register'}
                            </button>
                        </div>
                    </form>
                </div>
                :<Redirect to = '/signin'/>
                            }
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Register);