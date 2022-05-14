import React from 'react';
import {Link} from "react-router-dom";
import {useSigningClient} from "../../../wallet/hooks";

const Guest = () => {
    const {
        walletAddress,
        signingClient,
        loading,
        error,
        connectWallet,
        disconnect,
        gasPrice
    } = useSigningClient();
    return (
        <div className="auto pt-20 bg-black h-screen">
            <div className="p-2 text-2xl text-center font-extrabold text-transparent bg-clip-text
                           md:text-5xl bg-gradient-to-br from-blue-200 to-blue-500">
                Wallet not connected
            </div>
            <div className="flex items-center justify-center">
                <div className="w-24">
                    <Link to="/"
                          onClick={connectWallet}
                          className="cursor-pointer w-full py-2 flex items-center justify-center font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
                    >
                        Connect
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Guest;