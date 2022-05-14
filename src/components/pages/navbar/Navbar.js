import React, {Fragment} from 'react'
import {Popover, Transition} from '@headlessui/react'
import classNames from "../../../utils/css-utils";
import {CloseMenuButton, MenuButton} from "../../ui/navbar/buttons";
import {Link} from "react-router-dom";
import {TabsDropDownMenu} from "./menu/TabDropDownMenu";
import imgLabel from "../../../resources/label.png"
import {useSigningClient} from "../../../wallet/hooks";


function SmallNavBar({tabs}) {
    return (
        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            {tabs.map(({path, name}) => (
                <>
                    {name === "Launchpad" || name === "Docs" ? (
                        <div
                            className="cursor-not-allowed text-base font-medium text-gray-900 hover:text-gray-500">
                            {name}
                        </div>
                    ) : (
                        <Link to={path} key={name}>
                            <div
                                className="cursor-pointer text-base font-medium text-gray-900 hover:text-gray-500">
                                {name}
                            </div>
                        </Link>
                    )}
                </>
            ))}
        </div>
    )
}

export default function Navbar({tabs}) {
    const exploreTabs = tabs.explore
    const createTabs = tabs.create
    const profileTabs = tabs.profile
    const singleTabs = tabs.single

    const {
        walletAddress,
        signingClient,
        loading,
        error,
        connectWallet,
        disconnect
    } = useSigningClient();

    return (
        <Popover className="bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div
                    className="flex justify-between items-center border-b-2 border-gray-200 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link to="/">
                            <img
                                className="inline-block h-8 w-auto sm:h-10"
                                src={imgLabel}
                                alt=""
                            />
                        </Link>
                    </div>
                    {walletAddress !== "" ? (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <div
                                className="cursor-pointer text-lg font-extrabold text-mjol-blue-light hover:text-gray-900"
                            >
                                <Link to="/nfts">
                                    My NFTs
                                </Link>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                            <Link to="/"
                                  onClick={connectWallet}
                                  className="inline-flex justify-center py-1.5 px-4 font-bold text-lg font-large rounded-md text-white bg-gradient-to-br from-mjol-blue-base to-green-200 hover:from-green-200 hover:to-mjol-blue-base"
                            >
                                Connect
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </Popover>
    )
}