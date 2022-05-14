import {ChainInfo} from "../chain.info";
import {CosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {NFT_CONTRACT_ID} from "../config";

import {calculateFee} from "@cosmjs/stargate";

import {MintSite, NFT} from "../models/nft";


function convertNFT(contractId, tokenId, nft, price){
    const metadata = nft.info.extension;
    return new NFT(
        contractId,
        tokenId,
        nft.access.owner,
        metadata.name,
        metadata.description,
        1,
        metadata.image,
        nft.info.token_uri,
        new MintSite("", ""),
        price
    )
}


export async function mintToCommonCollection (userAddress, signingClient, gasPrice, token_metadata, payout) {
    let entrypoint = {
        mint: {
            owner: userAddress,
            extension: {
                name: token_metadata.title,
                description: token_metadata.description,
                image: token_metadata.media,
            },
            token_uri: token_metadata.reference
        }
    };
    let txFee = calculateFee(500000, gasPrice);

    try {
        let tx = await signingClient.execute(userAddress, NFT_CONTRACT_ID, entrypoint, txFee);
        console.log('Mint Tx', tx);
        return tx
    } catch (e) {
        console.warn('Error', e);
        return null
    }
}


async function initQueryHandler() {
    let cwClient = await CosmWasmClient.connect(ChainInfo.rpc);
    return cwClient.queryClient.wasm.queryContractSmart
}

export async function getNFT(contractId, tokenId) {
    let queryHandler = await initQueryHandler()
    let entrypoint = {
        all_nft_info: {
            token_id: tokenId
        }
    };
    const nft = await queryHandler(contractId, entrypoint);
    const price = null;
    return convertNFT(contractId, tokenId, nft, price)
}


export async function getUserNFTs(accountId) {
    console.log("User account address", accountId)
    let queryHandler = await initQueryHandler()

    let resNFTs = [];
    let entrypoint = {
        tokens: {
            owner: accountId,
            start_after: "0",
            limit: 20
        }
    };
    const tokenIds = await queryHandler(NFT_CONTRACT_ID, entrypoint);
    for (let tokenId of tokenIds["tokens"]) {
        const nftPromise = getNFT(NFT_CONTRACT_ID, tokenId);
        resNFTs.push(nftPromise)
    }
    console.log("res", resNFTs)
    return resNFTs
}


export async function sendNFT(userAddress, signingClient, gasPrice, contractId, tokenId, toAddr) {
    let entrypoint = {
        transfer_nft: {
            recipient: toAddr,
            token_id: tokenId
        }
    };
    let txFee = calculateFee(500000, gasPrice);

    let tx = await signingClient.execute(userAddress, contractId, entrypoint, txFee);
    console.log('Send Tx', tx);
    return tx

}

