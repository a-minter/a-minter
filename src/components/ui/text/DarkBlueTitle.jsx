import React from 'react';

const DarkBlueTitle = ({title}) => {
    return (
        <div
            className="text-center font-extrabold text-transparent bg-clip-text
                       bg-gradient-to-br from-green-200 to-mjol-blue-base
                       text-5xl md:text-6xl lg:text-7xl"
        >
            {title}
        </div>
    );
};

export default DarkBlueTitle;