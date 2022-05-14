import NftItem from "../nft-item/NftItem";
import React from "react";
import {useSigningClient} from "../../wallet/hooks";

const NftsGrid = ({nfts, fetching}) => {
    // const loaders = Array(12)
    //     .fill(0)
    //     .map((i, idx) =>
    //         <SmallNftLoader key={idx} width={280} height={410}/>
    //     )

    const {
        walletAddress,
        signingClient,
        loading,
        error,
        gasPrice
    } = useSigningClient();

    return (
        <div className="bg-black">
            <div className="bg-black max-w-screen-2xl mx-auto">
            <div className="bg-black max-w-7xl mx-auto py-8 px-8">
                <div className="bg-black h-screen p-5 md:p-10 ">
                    <div className="grid gap-8 lg:gap-8 xl:gap-10 justify-center auto-rows-min
                        grid-cols-3
                        xxs:grid-cols-1nft-280
                        sm:grid-cols-2nft-280
                        lg:grid-cols-3nft-280
                        xl:grid-cols-4nft-280
                        2xl:grid-cols-4nft-300">
                        {nfts.length === 0
                            ? <div>
                                {/* <div className="mt-20">*/}
                                {/*     <div className="p-2 text-2xl text-center font-extrabold text-transparent bg-clip-text*/}
                                {/*md:text-4xl bg-gradient-to-br from-yellow-500 to-yellow-800">*/}
                                {/*         You don't have any NFTs*/}
                                {/*     </div>*/}
                                {/* </div>*/}
                            </div>
                            : nfts.map(nft =>
                                <NftItem key={nft.getKey()} nft={nft} isPreview={false} accountId={walletAddress}
                                         signingClient={signingClient} gasPrice={gasPrice}/>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
</div>
)
    ;
};

export default NftsGrid;
