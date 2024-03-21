import AppHeader from "../Header/AppHeader.jsx";
import {Spin} from "antd";
import AppSider from "../AppSider/AppSider.jsx";
import AppContent from "../AppContent/AppContent.jsx";
import React, {useContext} from "react";
import CryptoContext from "../../../context/crypto-context.jsx";
import {Container, Grid} from "@mantine/core";
import cls from './AppLayout.module.scss';

export default function AppLayout() {
    const {loading} = useContext(CryptoContext);
    if (loading) {
        return (<Spin fullscreen/>);
    }
    return (
        <>
            <AppHeader/>
            <Container fluid className={cls.container}>
                <Grid grow  >
                    <Grid.Col span={2} px={0}>
                        <AppSider/>
                    </Grid.Col>
                    <Grid.Col span={10} px={0}>
                        <AppContent/>
                    </Grid.Col>
                </Grid>
            </Container>
        </>
    )
}