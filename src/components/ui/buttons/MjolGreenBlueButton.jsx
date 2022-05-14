import React from 'react';

const MjolGreenBlueButton = ({children, ...props}) => {
    return (
        <button {...props} className="px-4 py-2 rounded-lg w-full
                           bg-gradient-to-r from-mjol-blue-base to-green-200
                           text-gray-900 text-mono font-semibold
                           text-md md:text-lg
                           hover:to-mjol-blue-base hover:from-green-200
                           ">
            {children}
        </button>
    );
};

export default MjolGreenBlueButton;