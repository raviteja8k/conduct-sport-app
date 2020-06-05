import React from 'react';

const Players = (props) => {
    return(
    <div className={'playersList'} >
        {props.names}
    </div>
    );
}

export default Players;