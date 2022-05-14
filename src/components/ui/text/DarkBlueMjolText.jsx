import React from 'react';

const DarkBlueMjolText = ({text}) => {
    return (
        <div className="text-center font-extrabold text-transparent
                        bg-clip-text bg-gradient-to-bl from-yellow-500 to-yellow-800"
        >
            {text}
        </div>
    );
};

export default DarkBlueMjolText;