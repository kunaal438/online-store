import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, ...allprops }) => (
    <button className="custom-button" {...allprops}>
        {children}
    </button>
)

export default CustomButton;