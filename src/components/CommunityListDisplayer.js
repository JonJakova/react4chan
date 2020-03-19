import React, { Fragment } from 'react';
import {CommunityList} from './CommunityList';
import Community from './Community';

function CommunityListDisplayer({click}) {
    return (
        <Fragment>
           {CommunityList.map((comm, i) => {
               return(
                   <Community 
                       key={comm.id}
                       cId={comm.id}
                       click={click}
                   />
               );
           })}
        </Fragment>
    );
}

export default CommunityListDisplayer;