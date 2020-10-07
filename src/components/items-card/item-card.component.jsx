import React from 'react';

import './item-card.style.scss';

const ItemCard = ({ data }) => (
    <div className="card" key={data.id}>
        <div className="img" style={{ backgroundImage: `url(${data.imageUrl})` }}></div>
        <div className="info">
            <p className="name">{data.name}</p>
            <p className="price">${data.price}</p>
        </div>
    </div>
)

export default ItemCard;