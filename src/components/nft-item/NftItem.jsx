import React, {useState} from 'react';
import NftImage from "./details/image/NftImage";
import NftBoxContainer from "./NftBoxContainer";
import NftMintedLink from "./details/minted/NftMintedLink";
import NftTitle from "./details/title/NftTitle";

import InputPriceModal from "../ui/modal/InputPriceModal";
import {useAppDispatch} from "../../hooks/redux";
import {sendNft} from "../../state/transaction/nft/thunk";

const NftItem = ({nft, isPreview, accountId, signingClient, gasPrice}) => {
    let [visible, setVisible] = useState(true);
    const previewLink = `/nft/${nft.contractId}/${nft.tokenId}`
    console.log(previewLink)
    const isListed = nft.isListed()
    const dispatch = useAppDispatch()
    // useEffect((): any => {
    //     dispatch(fetchNft(nft.contractId, nft.tokenId))
    //     return () => dispatch(previewNftSlice.actions.reset())
    // }, [updPage])



    const send = (to_addr) => {
        dispatch(sendNft(accountId, signingClient, gasPrice, nft.contractId, nft.tokenId, to_addr))
    }


    return (
        <NftBoxContainer>
            {isPreview ? (
                <NftImage path={nft.mediaURL}/>
            ) : (
                <div>
                    <InputPriceModal hidden={visible} setVisible={() => setVisible(!visible)}
                                     onClick={send}/>
                    <div className="cursor-pointer" onClick={() => setVisible(!visible)}>
                        <NftImage path={nft.mediaURL}/>
                    </div>
                </div>
            )}

            <div className="px-5">
                {/*<Link to={previewLink}>*/}
                <NftTitle title={nft.title}/>
                {/*</Link>*/}
                {/*<NftCollection collectionLogoLink="MOCK"*/}
                {/*               collectionLink="MOCK"*/}
                {/*               collectionName="Main collection"/>*/}
                <div className="grid place-items-end">
                    <div className="inline-flex space-x-1 text-tiny-2 xs:text-tiny-3 2xl:text-tiny-4 items-center">
                        <NftMintedLink mintedName={nft.mintSite.name}
                                       mintedLink={nft.mintSite.nftLink}/>
                        {/*{nft.mintSite.name === 'Non-verified contract' ? (*/}
                        {/*    <></>*/}
                        {/*) : (*/}
                        {/*    //<NftVerifiedStatus/>*/}
                        {/*)*/}
                        {/*}*/}
                    </div>
                </div>
                <hr className="ring-1 ring-mjol-purple-dark border-none"/>
                <div className="py-2 truncate text-clip text-blue-500">
                    <label className="underline">Owner:</label> {nft.ownerId}
                </div>
            </div>
        </NftBoxContainer>
    );
};

export default NftItem;