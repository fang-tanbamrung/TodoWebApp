import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login, linkToRegister } from '../actions/user.action';

const mapStateToProps = state => {
    return{
        loggingIn:state.authentication.loggingIn,
        err:state.authentication.err
    }
}

const mapDispatchToProp = (dispatch) => {
    return{
        login: (username,password) => dispatch(login(username,password)),
        linkToRegister: () => dispatch(linkToRegister())
    }
}

const inintialState = {
    email:'',
    password:'',
    submit:false,
    loading:false
}

class Signin extends React.Component{
    constructor(props){
        super(props)

        this.state = inintialState;

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
        this.setState({loading:false});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        this.setState({submit:true});
        this.setState({loading:true});
        if (email && password) {
            this.props.login(email,password);
        }
        
    }
    render(){
        const { handleChange, handleSubmit } = this;
        const { submit, email, password, loading } = this.state;
        const { loggingIn, linkToRegister, err } = this.props;
        return(
            <div className='mt4'>
                {loggingIn?
                <Redirect to='/todo'/>
                :
                <div className = 'pa3 flex justify-center'>
                    <form onSubmit={(e) => handleSubmit(e) } className='white ba br2 b-white pa3 flex justify-center flex-column'>
                        <div className='ma2'>
                            <label htmlFor='email' className=''>
                                {'Email :'}
                            </label><br/>
                            {submit && !email &&
                                <div className="ba br2 bg-white red">{'Email is required'}</div>
                            }
                            <input type='email' name='email' className='br2 mt1' onChange={handleChange}/>
                        </div>
                        <div className='ma2'>
                            <label htmlFor='password' className=''>
                                {'Password :'}
                            </label><br/>
                            {submit && !password &&
                                <div className="ba br2 bg-white red">{'Password is required'}</div>
                            }
                            <input type='password' name='password' className='br2 mt1' onChange={handleChange}/>
                        </div>
                            {   
                                err !== 'Unauthorized' && email && password && loading && 
                                <div className = 'flex justify-center'>
                                    <img alt='loading-gif' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                                </div>
                            }
                        <div className='ma2 flex justify-center'>
                            <button className='br2 mr2 bg-white-70'>
                                {'Sign In'}
                            </button>
                        
                            <button className='br2 bg-white-70' onClick = {linkToRegister}>
                                <Link to='/register' className='no-underline black'>
                                    {'Register'}
                                </Link>
                            </button>
                            
                        </div>
                    </form>
                </div>}
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(Signin);

