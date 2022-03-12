import React from 'react';
import classes from './CommonButton.module.css'

const CommonButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.cButton}>
            {children}
        </button>
    )
};

export default CommonButton;