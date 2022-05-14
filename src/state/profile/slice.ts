import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NFT} from "../../business-logic/models/nft";

export enum PROFILE_TAB {
    ALL_NFTS = "All NFTs",
    LISTED_NFTS = "Listed NFTs",
    HISTORY = "My History"
}

export interface ProfileState {
    tabs: Array<PROFILE_TAB>,
    activeTab: PROFILE_TAB,
    fetching: boolean,
    success: boolean | undefined,
    nfts: Array<NFT>,
    history: []
}

const initialState: ProfileState = {
    tabs: [PROFILE_TAB.ALL_NFTS, PROFILE_TAB.LISTED_NFTS, PROFILE_TAB.HISTORY],
    activeTab: PROFILE_TAB.ALL_NFTS,
    fetching: true,
    success: undefined,
    nfts: [],
    history: []
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        changeTab: (state, action: PayloadAction<PROFILE_TAB>) => {
            state.activeTab = action.payload
        },
        addNft: (state, action: PayloadAction<NFT | null>) => {
            if (action.payload) {
                state.nfts.push(action.payload)
            }
        },
        startFetching: (state) => {
            state.fetching = true
        },
        success: (state) => {
            state.success = true
            state.fetching = false
        },
        failure: (state) => {
            state.success = false
            state.fetching = false
        },
        resetNfts: (state) => {
            state.nfts = []
            state.fetching = true
            state.success = undefined
        }
    }
})

export const profileReducer = profileSlice.reducer