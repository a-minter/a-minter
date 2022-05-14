import {AppDispatch} from "../../store";
import {marketNftTransactionSlice} from "./slice";
import {GasPrice} from "@cosmjs/stargate";
import {SigningCosmWasmClient} from "@cosmjs/cosmwasm-stargate";
import {sendNFT} from "../../../business-logic/api/api";



export const sendNft = (accountId: String, signingClient: SigningCosmWasmClient, gasPrice: GasPrice, contractId: string, tokenId: string, to_addr: string) =>
    async (dispatch: AppDispatch) => {
        dispatch(marketNftTransactionSlice.actions.commit())
        sendNFT(accountId, signingClient, gasPrice, contractId, tokenId, to_addr)
            .then(() => {
                dispatch(marketNftTransactionSlice.actions.success())
            })
            .catch(() => dispatch(marketNftTransactionSlice.actions.failure()))
    }

