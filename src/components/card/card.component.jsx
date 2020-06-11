import React from 'react'
import './card.styles.css'

export const Card = ({val}) => {
    return (
        <div className='card-container'>
            <img 
                alt='monster'
                src={`https://robohash.org/${val.id}?set=set5&size=180x180`}
                />
            <h2 >{val.name}</h2>
            <h5 >{val.email}</h5>
        </div>
    )
} 