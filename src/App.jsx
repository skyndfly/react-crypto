import React from 'react';
import {CryptoContextProvider} from "./context/crypto-context.jsx";
import AppLayout from "./components/layout/AppLayout/AppLayout.jsx";
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import {MantineProvider} from '@mantine/core';
import {Notifications} from "@mantine/notifications";


export default function App() {
    return (
        <MantineProvider>
            <CryptoContextProvider>
                <Notifications />
                <AppLayout/>
            </CryptoContextProvider>
        </MantineProvider>
    )
}
