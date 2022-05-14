import React from 'react';

const NftTitle = ({title}) => {
    return (
        <div className="font-extrabold text-mjol-purple-dark truncate
                        text-sm md:text-md 2xl:text-lg">
            {title}
        </div>
    );
};

export default NftTitle;