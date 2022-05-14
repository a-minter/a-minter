import React from 'react';

import bg from '../../../resources/background/paras-bg.jpg'

const Background = ({children}) => {
    return (
        <div
            className="bg-gradient-to-br from-purple-300 to-blue-400"
        //     style={{
        //     backgroundImage: `url(${bg})`,
        //     zIndex: -1,
        //     height: '100vh',
        //     backgroundPosition: 'center',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundSize: 'cover',
        // }}
        >
            {children}
        </div>
    );
};

export default Background;