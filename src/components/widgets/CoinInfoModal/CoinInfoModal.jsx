import {Title} from "@mantine/core";

export default function CoinInfoModal({coin}){
    return (
        <Title order={2}>{coin.name}</Title>
    )
}