import React from 'react'
import AppRouter from "./AppRouter";
import NavbarContainer from "../components/pages/navbar/NavbarContainer";
import {SigningCosmWasmProvider} from "../wallet/hooks";

export default function App() {

    return (
        <SigningCosmWasmProvider>
            <NavbarContainer/>
            <AppRouter/>
            {/*<FooterPage/>*/}
        </SigningCosmWasmProvider>
    )
}