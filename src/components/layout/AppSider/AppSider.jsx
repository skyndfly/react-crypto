import {List, Statistic, Typography, Tag} from "antd";
import React, {useContext} from "react";
import {ArrowUpOutlined, ArrowDownOutlined} from "@ant-design/icons"
import {capitalize} from '../../../helpers.js';
import CryptoContext from "../../../context/crypto-context.jsx";
import {Card} from "@mantine/core";
import cls from './AppSider.module.scss';


export default function AppSider() {
    const {assets} = useContext(CryptoContext)

    return (
        <>
            {assets.map(asset => (
                <Card className={cls.card}  radius="md"  key={asset.id}>
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
        </>
    );
}