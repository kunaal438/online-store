import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, key, imgUrl, size }) => (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imgUrl})` }}>
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;