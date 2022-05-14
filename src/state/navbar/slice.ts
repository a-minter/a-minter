import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    tabs: {
        explore: [
            {name: 'NFTs', path: '/nfts'},
            {name: 'Collections', path: '/collections'},
        ],
        create: [
            {name: 'NFT', path: '/create-nft'},
            {name: 'Collection', path: '/create-collection'}
        ],
        profile: [
            {name: 'My NFTs', path: '/profile/nfts'},
            {name: 'My Collections', path: '/profile/collections'},
            {name: 'Sign out', path: '/logout'}
        ],
        single: [
            {name: 'Launchpad', path: '/launchpad'},
            {name: 'Docs', path: '/docs'}
        ]
    }
}

export const navbarSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {}
})

export const navbarReducer = navbarSlice.reducer