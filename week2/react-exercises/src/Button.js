import React from 'react';
import { Button } from '@material-ui/core';

const ButtonComponent = (props) => {
    const { onClick, text} = props;
    return (
    <Button variant="contained" color="secondary" onClick={onClick}>{text}</Button>
    )
}

export default ButtonComponent;