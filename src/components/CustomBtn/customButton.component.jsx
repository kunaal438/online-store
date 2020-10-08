import React from 'react';

import './customButton.styles.scss';

const CustomButton = ({ children, signInGoogle, ...allprops }) => (
    <button className={`${signInGoogle ? 'sign-in-google' : ''} custom-button`} {...allprops}>
        {children}
    </button>
)

export default CustomButton;