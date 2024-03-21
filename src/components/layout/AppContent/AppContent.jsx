import React from "react";
import {Title} from "@mantine/core";
import {useCrypto} from "../../../context/crypto-context.jsx";
import Portfolio from "../../widgets/Portfolio/Portfolio.jsx";
import AssetsTable from "../../widgets/AssetsTable/AssetsTable.jsx";
import cls from './AppContent.module.scss';

export default function AppContent() {
    const {assets, crypto} = useCrypto();
    return (
        <div className={cls.content}>
            <Title order={1}>
                Кошелек: {assets.map(asset => {
                    const coin = crypto.find(c => c.id === asset.id)
                    return asset.amount * coin.price;
                }
            ).reduce((acc, v) => (acc += v),)
                .toFixed(2)
            }$
            </Title>
            <Portfolio />
            <AssetsTable />
        </div>
    );
}