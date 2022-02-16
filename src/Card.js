import React from 'react';
import 'animate.css';
import './Card.css';

const Card = ({id, name, email}) => {
    return (
        <div class="card animate__animated">
            <img src={`https://robohash.org/${id}?200x200`} alt="Robot" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;