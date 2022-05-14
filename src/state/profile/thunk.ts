import {AppDispatch} from "../store";
import {profileSlice} from "./slice";
import {getUserNFTs} from "../../business-logic/api/api";

export const fetchMyNfts = (accountId: string) => async (dispatch: AppDispatch) => {
    dispatch(profileSlice.actions.startFetching())
    getUserNFTs(accountId)
        .then(nfts => {
                nfts.map(nftPromise =>
                    nftPromise
                        .then(nft => {
                            dispatch(profileSlice.actions.addNft(nft))
                        })
                        .catch(() => console.log('NFT not found'))
                )
                dispatch(profileSlice.actions.success())
            }
        )
        .catch(() => dispatch(profileSlice.actions.failure()))
}