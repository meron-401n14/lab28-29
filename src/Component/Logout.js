import React from 'react';
import { connect } from 'react-redux';

function Logout(props) {
  
 
    return (
        
    
        
            <button  className="btn-secondary"
                onClick={() => {
                    props.dispatch({ type: 'LOGOUT' });
                }}
            >
                Logout
            </button>
       
    )

}



export default connect()(Logout);