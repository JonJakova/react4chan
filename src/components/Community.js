import React from 'react';

function Community({cId, click}) {
    return(
        <span style={{padding: "6px"}}>
           <button id={cId} type='button' onClick={click}>
               {cId}
           </button> 
        </span>
    );
}

export default Community;