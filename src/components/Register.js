import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { register } from '../actions/user.action';

const mapStateToProps = state => {
    return{
        isRegisterDone:state.register.isRegisterDone
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
        const { isRegisterDone } = this.props
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
                                <div className="ba br2 bg-white red">Name is required</div>
                            }
                            <input onChange = {handleChange} name = 'name' className = 'br2 mt1' type = 'text'/>
                        </div>
                        <div className = 'ma2'>
                            <label htmlFor = 'email'>
                                {'Email :'}
                            </label><br/>
                            {submit && !email &&
                                <div className="ba br2 bg-white red">Email is required</div>
                            }
                            <input onChange = {handleChange} type = 'email' name = 'email' className = 'mt1 br2'/>
                        </div>
                        <div className = 'ma2'>
                            <label htmlFor = 'password'>
                                {'Password :'}
                            </label><br/>
                            {submit && !password &&
                                <div className="ba br2 bg-white red">Password is required</div>
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
                                {'Password must be match'}  
                            </div>}
                            <input onChange = {handleChange} type = 'password' name = 'rpassword' className = 'mt1 br2'/>
                        </div>
                        <div className = 'ma2 flex justify-center'>
                            <button className='br2'>
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