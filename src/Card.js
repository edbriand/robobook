import React from 'react';
import 'animate.css';
import './Card.css';

const Card = ({id, name, email, hash, color}) => {
    return (
        <div className="card animate__animated" style={{backgroundColor: color}}>
            <img src={`https://robohash.org/${hash}?size=200x200`} alt="Robot" />
            <div className="cardtext">
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;