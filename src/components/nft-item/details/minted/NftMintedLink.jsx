import React from 'react';

const NftMintedLink = ({mintedName, mintedLink}) => {
    return (
        <a className="text-white font-semibold hover:text-mjol-purple-base"
           href={mintedLink}
           target="_blank"
        >
            _
        </a>
    );
};

export default NftMintedLink;