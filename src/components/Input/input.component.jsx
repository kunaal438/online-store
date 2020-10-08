import React from 'react';

import './input.styles.scss';

const FormInput = ({ handleChange, label, ...allprops }) => (
    <div className="form-group">
        <input onChange={handleChange} {...allprops} autoComplete="off"/>
        {
            label ?
            (<label className={`${allprops.value.length ? 'shrink' : ''} form-label`}>
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;