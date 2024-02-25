import {Layout} from "antd";
import React from "react";
const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    color: '#fff',
    padding: 16,
    backgroundColor: '#001529',
};

export default function AppContent(){
    return (
        <Layout.Content style={contentStyle}>Content</Layout.Content>
    );
}