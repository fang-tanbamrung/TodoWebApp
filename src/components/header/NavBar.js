import React from 'react';

const NavBar = ({name = `user's name`}) => {
    return(
        <div className = 'pv2 pa1 ba bg-black mb3 fixed-bar flex justify-end'>
            <div className= 'white w-50 flex items-center pa2'>
                {name}
            </div>
            <div className='w-50 flex justify-end'>
                <div className = 'f6 ba br4 pa2 pointer white-70 hover-bg-white-70 hover-black'>
                    {'Sign Out'}
                </div>
            </div>
        </div>
    )
}

export default NavBar;