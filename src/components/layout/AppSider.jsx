import {Card, Layout, List, Statistic, Typography, Spin, Tag} from "antd";
import React, {useContext} from "react";
import {ArrowUpOutlined, ArrowDownOutlined} from "@ant-design/icons"
import {capitalize} from '../../helpers.js';
import CryptoContext from "../../context/crypto-context.jsx";

const siderStyle = {
    padding: 10
};


export default function AppSider() {
    const {loading, assets} = useContext(CryptoContext)
    if (loading) {
        return (<Spin fullscreen/>);
    }
    return (
        <Layout.Sider width="25%" style={siderStyle}>
            {assets.map(asset => (

                <Card key={asset.id} style={{marginBottom: 10}}>
                    <Statistic
                        title={capitalize(asset.id)}
                        value={asset.totalAmount}
                        precision={2}
                        valueStyle={{color: asset.grow ? '#3f8600' : '#cf1322'}}
                        prefix={asset.grow ? <ArrowUpOutlined/> : <ArrowDownOutlined/>}
                        suffix="$"
                    />
                    <List
                        size="small"
                        dataSource={[
                            {
                                title: "Заработано",
                                value: asset.totalProfit,
                                withTag: true
                            },
                            {
                                title: "Количество",
                                value: asset.amount,
                                isPlain: true
                            }
                            // {
                            //     title: "Разница",
                            //     value: asset.growPercent
                            // }
                        ]}
                        renderItem={(item) => (
                            <List.Item>
                                <span>{item.title}</span>
                                <span>
                                    {item.withTag &&
                                        <Tag color={asset.grow ? 'green' : 'red'}>{asset.growPercent}%</Tag>}
                                    {item.isPlain && item.value}
                                    {!item.isPlain && (
                                        <Typography.Text
                                            type={asset.grow ? 'success' : 'danger'}>{item.value.toFixed(2)}$</Typography.Text>
                                    )}
                                        </span>
                            </List.Item>
                        )}
                    />
                </Card>
            ))}
        </Layout.Sider>
    );
}