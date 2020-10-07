import React from "react";
import { withRouter } from 'react-router-dom';
import "./menu-item.styles.scss";

const MenuItem = ({ title, key, imgUrl, size, history, match, linkUrl }) => (
    <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-container" style={{ backgroundImage: `url(${imgUrl})` }}></div>
        <div className="content">
            <h2 className="title">{title}</h2>
            <span className="subtitle">SHOP NOW</span>
        </div>
    </div>
);

export default withRouter(MenuItem);