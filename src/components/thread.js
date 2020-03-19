import React, { Fragment } from 'react';

function Thread(props) {
    return (
        <Fragment>
            <div>
                {props.user}
            </div>
            <div>
                {props.comment}
            </div>
        </Fragment>
    );
}

export default Thread;