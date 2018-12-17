import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Todo from '../containers/Todo';
import Signin from './Signin';
import Register from './Register';
import Homepage from '../components/Homepage';
import { logout } from '../actions/user.action';

const mapStateToProps = (state) => {
    return{
        loggingIn:state.authentication.loggingIn,
        email:state.authentication.email
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        logout:() => dispatch(logout())
    }
}

const Header = (props) => {
    const { loggingIn, logout, email } = props
    return(
        <Router>
            <div>
            <div className = 'bg-black pa1 flex'>
                <div className='flex items-center ma1 pa1 w-70'>
                    <div className='white ma1'>
                        {email}
                    </div>
                </div>
                <div className='flex justify-end w-30 flex-center mr2 ma1'>
                    <Link to = '/signin' className='no-underline'>
                        {loggingIn?
                        <div onClick={logout} className = ' white pointer dim ba br-pill pa2 ma1'>
                        {'Sign Out'}
                        </div>
                        :<div className = ' white pointer dim ba br-pill pa2 ma1'>
                        {'Sign In'}
                        </div>
                        }
                    </Link>
                </div>
            </div>
            <Route path = '/' component = { Homepage } />
            <Route path = '/todo' component = { Todo } /> 
            <Route path = '/signin' component = { Signin } />
            <Route path = '/register' component = { Register } />
            </div>
        </Router>
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
