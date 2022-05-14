import React from 'react';

const BlueShadowContainer = ({children}) => {
    return (
        <div className="bg-black shadow-mjol-base-blue-xl pt-4">
            {children}
        </div>
    );
};

export default BlueShadowContainer;