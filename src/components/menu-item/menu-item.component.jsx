import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, key, imgUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div className="background-container" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default MenuItem;