import React from 'react';
import Thread from './components/thread';

function ThreadList({threadL}) {
    return(
        <div>
        {threadL.map((unit) => {
            return(
                <Thread
                    key={Math.random()}
                    user={unit.user}
                    comment={unit.comment}
                />
            );
        })}
        </div>
    );
}

export default ThreadList;