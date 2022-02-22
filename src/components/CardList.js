import React from 'react';
import Card from './Card';

const CardList = ({robots}) => {
    return (
        <>
        {robots.map(r => <Card 
        key={r.id} 
        name={r.name} 
        email={r.email} 
        hash={r.hash} 
        color={r.color}/>)} 
        </>
    )
}

export default CardList;