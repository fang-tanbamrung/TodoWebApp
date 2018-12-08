import React from 'react';

import { connect } from 'react-redux';
import { showDateSearh, dateSearch, showTextSearch, todoSearch } from '../actions/search.action';

const mapDispathToProps = (dispatch) => {
    return{
        handleDateClick:() => dispatch(showDateSearh()),
        handleDateSearch:(date) => dispatch(dateSearch(date)),
        handleTextSearch:(text) => dispatch(todoSearch(text)),
        handleTextClick:() => dispatch(showTextSearch())
    }
}

const mapStateToProps = (state) => {
    return{
        showDateSearh:state.Search.showDateSearch,
        showTextSearch:state.Search.showTextSearch
    }
}


const Search = props => { 
    const {handleTextClick, handleDateClick, handleTextSearch, showTextSearch, showDateSearh, handleDateSearch} = props
    let date
    return(
        <div className = 'ma3'>
            <button className='br2 pointer dim' onClick={handleDateClick}>
                {'Search Due date'}
            </button>
            <button className='br2 ml2 pointer dim' onClick={handleTextClick}>
                {'Search Todo'}
            </button>
            <button className = 'br2 ml2 pointer dim' onClick={() => {
                handleDateSearch('')
                handleTextSearch('')
                if(showDateSearh){
                    handleDateClick()
                }
                if(showTextSearch){
                    handleTextClick()
                }
                }}>
                {'Show all'}
            </button>
            {showDateSearh?
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(!date.value){
                        return
                    }
                    handleDateSearch(date.value)
                }}>
                    <input className='mt2 mr2 br-pill' type='date' ref={node => date=node}/>
                    <button className='br2 dim pointer'>
                        {'Search'}
                    </button>
                </form>
            </div>
            :''}
            {showTextSearch?
            <div>
                <input className='mt2 br2' onChange = {event => handleTextSearch(event.target.value)}/>
            </div> 
            :''}
        </div>
    )
}

export default connect(mapStateToProps,mapDispathToProps)(Search);