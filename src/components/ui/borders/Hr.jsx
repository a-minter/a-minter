import React from 'react';

const Hr = ({color = "bg-black"}) => {
    return <div className={color + " h-px"}/>
};

export default Hr;