import {NFT} from "../business-logic/models/nft";
import {ItemMarketStatus} from "../state/transaction/state";

export const useNftMarketStatus = (accountId: string, nft: NFT): ItemMarketStatus => {

    const isListed = nft.isListed()

    return (accountId === nft.ownerId) ?
        isListed
            ? ItemMarketStatus.LISTED
            : ItemMarketStatus.CAN_SELL
        : isListed
            ? ItemMarketStatus.CAN_BUY
            : ItemMarketStatus.FREE
}