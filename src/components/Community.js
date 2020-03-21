import React from 'react';

function Community({cId, cName, click}) {
    return(
        <span style={{padding: "6px"}}>
           <button id={cName} type='button' onClick={click}>
               {cId}
           </button> 
        </span>
    );
}

export default Community;