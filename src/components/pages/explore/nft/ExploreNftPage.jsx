import React from 'react';
import NftsGrid from "../../../nft-collection/NftsGrid";

const ExploreNftPage = ({nfts, fetching}) => {

    return (
        <div className="space-y-6">
            <NftsGrid nfts={nfts} fetching={fetching}/>
        </div>
    );
};

export default ExploreNftPage;