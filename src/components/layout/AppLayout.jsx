import AppHeader from "./Header/AppHeader.jsx";
import {Layout, Spin} from "antd";
import AppSider from "./AppSider.jsx";
import AppContent from "./AppContent.jsx";
import React, {useContext} from "react";
import CryptoContext from "../../context/crypto-context.jsx";
import {Container} from "@mantine/core";

export default function AppLayout() {
    const {loading} = useContext(CryptoContext);
    if (loading) {
        return (<Spin fullscreen/>);
    }
    return (
        <Container fluid px={0}>
            <AppHeader/>
            <Layout>
                <AppSider/>
                <AppContent/>
            </Layout>
        </Container>
    )
}