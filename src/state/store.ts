import {configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {profileReducer} from "./profile/slice";
import {navbarReducer} from "./navbar/slice";
import {marketNftTransactionReducer} from "./transaction/nft/slice";


export const rootReducer = combineReducers({
    navbar: navbarReducer,
    profile: profileReducer,
    transaction: marketNftTransactionReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']