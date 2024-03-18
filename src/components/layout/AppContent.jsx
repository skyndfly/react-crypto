import React from "react";
import {Title} from "@mantine/core";
import {useCrypto} from "../../context/crypto-context.jsx";

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 36px)',
    color: '#fff',

};

export default function AppContent() {
    const {assets, crypto} = useCrypto();
    return (
        <div style={contentStyle}>
            <Title order={3}>
                Портфолио: {assets.map(asset => {
                    const coin = crypto.find(c => c.id === asset.id)
                    return asset.amount * coin.price;
                }
            ).reduce((acc, v) => (acc += v),)
                .toFixed(2)
            }$
            </Title>
        </div>
    );
}