import Navbar from "./Navbar";

import React from 'react';
import {useAppSelector} from "../../../hooks/redux";

const NavbarContainer = () => {
    const tabs = useAppSelector(state => state.navbar.tabs)

    return <Navbar tabs={tabs}/>;
};

export default NavbarContainer;