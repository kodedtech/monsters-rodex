import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="monsters" src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} />
        <h2> {props.monsters.name}</h2> 
        <p>{props.monsters.email}</p>
        <p>{props.monsters.username}</p>
        <p>{props.monsters.address.city} {props.monsters.address.suite}</p>
        {/* <p>{props.monsters.address.zipcode}</p>
        <p>{props.monsters.address.geo.lat}</p>
        <p>{props.monsters.phone}</p>
        <p>{props.monsters.website}</p> */}
        
    </div>
)