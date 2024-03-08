import React from 'react';
import {CryptoContextProvider} from "./context/crypto-context.jsx";
import AppLayout from "./components/layout/AppLayout/AppLayout.jsx";
import '@mantine/core/styles.css';
import {MantineProvider} from '@mantine/core';


export default function App() {
    return (
        <MantineProvider>
            <CryptoContextProvider>
                <AppLayout/>
            </CryptoContextProvider>
        </MantineProvider>
    )
}
