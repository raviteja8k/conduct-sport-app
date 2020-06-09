import React from 'react';
import stylesp from './players.module.css';

const Players = (props) => {
    return(
    <div onClick={props.clicked} className={stylesp.Players}>
        {props.names}
    </div>
    );
}

export default Players;