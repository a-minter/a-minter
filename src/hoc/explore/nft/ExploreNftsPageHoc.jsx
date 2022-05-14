import React, {useEffect} from 'react';
import ExploreNftsPage from "../../../components/pages/explore/nft/ExploreNftPage";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";

import {fetchMyNfts} from "../../../state/profile/thunk";
import {useSigningClient} from "../../../wallet/hooks";

const ExploreNftsPageHoc = () => {

    const {
        walletAddress,
        signingClient,
        loading,
        error
    } = useSigningClient();
    const {nfts, fetching, activeTab} = useAppSelector(state => state.profile)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchMyNfts(walletAddress))
        return () => dispatch(profileSlice.actions.resetNfts())
    }, [])

    return <ExploreNftsPage nfts={nfts} fetching={fetching}/>
};

export default ExploreNftsPageHoc;