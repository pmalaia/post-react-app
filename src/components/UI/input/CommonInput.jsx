import React from 'react';
import classes from './CommonInput.module.css'

const CommonInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} {...props} className={classes.cInput}/>
    )
});

export default CommonInput;