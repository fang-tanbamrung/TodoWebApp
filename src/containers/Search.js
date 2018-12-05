import React from 'react';
import { connect } from 'react-redux';
import { isSearchClick, showSearh } from '../actions';

const mapDispathToProps = (dispath) => {
    return{
        handleClick:() => dispath(showSearh()),
        handleSearch:(date) => dispath(isSearchClick(date))
    }
}

const mapStateToProps = (state) => {
    return{
        isClick:state.Search.showSearch
    }
}


const Search = props => { 
    const {handleClick, isClick, handleSearch} = props
    let date
    return(
        <div className = 'ma3'>
            <button className='br2 pointer dim' onClick={handleClick}>
                {'Search Due date'}
            </button>
            <button className = 'br2 ml2 pointer dim' onClick={() => handleSearch('')}>
                {'Show all'}
            </button>
            {isClick?
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(!date.value){
                        return
                    }
                    handleSearch(date.value)
                    // date.value = ''
                }}>
                    <input className='mt2 mr2 br-pill' type='date' ref={node => date=node}/>
                    <button className='br2 dim pointer'>
                        {'Search'}
                    </button>
                </form>
            </div>
            :''}
        </div>
    )
}

export default connect(mapStateToProps,mapDispathToProps)(Search);