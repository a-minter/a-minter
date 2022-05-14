import React from 'react';

const NftBoxContainer = ({children}) => {
    return (
        <div className="group flex flex-col overflow-hidden justify-between
                        rounded-xl bg-white ring-1 ring-yellow-200
                        select-none
                        shadow-mjol-blue-all-xs
                        transform duration-300 ease-border-timing
                        hover:shadow-mjol-blue-all-md hover:ring-yellow-400"
        >
            {children}
        </div>
    );
};

export default NftBoxContainer;