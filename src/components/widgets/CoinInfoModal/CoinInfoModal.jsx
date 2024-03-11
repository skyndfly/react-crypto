import {Group, Image, Title, Divider, Text, Badge, NumberFormatter, rem} from "@mantine/core";
import cls from './CoinInfoModal.module.scss';
import React from "react";
import {IconBrandReddit, IconBrandTwitter, IconWorldWww} from "@tabler/icons-react";
import {Button} from "../../shared/ui/Button/Button.jsx";

export default function CoinInfoModal({coin}) {
    const links = coin.explorers.map((link) => {
        return `<a href="${link}">${link}</a>`;
    })
    return (
        <>
            <Group gap={3} justify='space-between'>
                <Group gap={3} justify='space-between'>
                    <Image w={24} src={coin.icon} alt={coin.name}/>
                    <Title order={2}>({coin.symbol}) {coin.name}</Title>
                </Group>
                <Text className={cls.stats_text} size="xl">
                    <Badge variant="outline" size="lg" radius="sm" color={coin.price > 0 ? 'teal' : 'red'}>
                        <NumberFormatter  decimalScale={5} suffix=" $" value={coin.price} thousandSeparator/>

                    </Badge>
                </Text>
            </Group>
            <Divider my="md"/>
            <Group justify='space-between' className={cls.stats_block}>
                <Text className={cls.stats_text} size="md">
                    <strong>Один час:</strong>
                    <Badge size="lg" radius="sm" color={coin.priceChange1h > 0 ? 'teal' : 'red'}>
                        {coin.priceChange1h}%
                    </Badge>
                </Text>
                <Text className={cls.stats_text} size="md">
                    <strong>Один день:</strong>
                    <Badge size="lg" radius="sm" color={coin.priceChange1d > 0 ? 'teal' : 'red'}>
                        {coin.priceChange1d}%
                    </Badge>
                </Text>
                <Text className={cls.stats_text} size="md">
                    <strong>Одна неделя:</strong>
                    <Badge size="lg" radius="sm" color={coin.priceChange1w > 0 ? 'teal' : 'red'}>
                        {coin.priceChange1w}%
                    </Badge>
                </Text>
            </Group>

            <Divider my="md"/>
            <Group >
                <a href={coin.redditUrl} target="_blank" >
                    <Button size="xs" text={<IconBrandReddit/>} variant="light" />
                </a>
                <a href={coin.websiteUrl} target="_blank">
                    <Button size="xs" text={<IconWorldWww/>} variant="light" />
                </a>
                <a href={coin.twitterUrl} target="_blank">
                    <Button size="xs" text={<IconBrandTwitter/>} variant="light" />
                </a>
            </Group>
            <div>
                {links}
            </div>
        </>
    )
}