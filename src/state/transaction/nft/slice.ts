import {TransactionStatus} from "../state";
import {createSlice} from "@reduxjs/toolkit";

const initialState: TransactionStatus = {
    pending: undefined,
    full_success: undefined,
    success_state: undefined
}

export const marketNftTransactionSlice = createSlice({
    name: 'market-nft-transaction',
    initialState,
    reducers: {
        commit: (state) => {
            state.pending = true
            state.success_state = "disabled"
        },
        commit_two: (state) => {
            state.pending = true
            state.success_state = "enabled"
        },
        first_success: (state) => {
            state.success_state = "done 1/2"
        },
        success: (state) => {
            state.full_success = true
            state.pending = false
            state.success_state = "done 2/2"
        },
        failure: (state) => {
            state.full_success = false
            state.success_state = "disabled"
            state.pending = false
        },
        reset: () => initialState
    }
})

export const marketNftTransactionReducer = marketNftTransactionSlice.reducer