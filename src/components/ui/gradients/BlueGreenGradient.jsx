import React from 'react';

const BlueGreenGradient = ({children, className}) => {
    return (
        <div className={"bg-gradient-to-tr from-yellow-500 to-green-400 " + className}>
            {children}
        </div>
    );
};

export default BlueGreenGradient;