import {Divider, Group, Image, Menu, Title, UnstyledButton} from '@mantine/core';
import React, {useState} from "react";
import cls from "./AddCryptoModal.module.scss";
import {IconChevronDown} from "@tabler/icons-react";
import {useCrypto} from "../../../context/crypto-context.jsx";
import {Button} from "../../shared/ui/Button/Button.jsx";
import {IconRepeat} from "@tabler/icons-react";

export function AddCryptoModal() {
    const {crypto} = useCrypto();
    const [opened, setOpened] = useState(false);
    const [coin, setCoin] = useState(null);
    const [selected, setSelected] = useState(crypto[0]);
    if (!coin) {
        function handleSelect(val) {
            setCoin(crypto.find((c) => c.id === val));
        }

        const items = crypto.map((item) => (
            <Menu.Item
                leftSection={<Image src={item.icon} width={18} height={18}/>}
                onClick={() => {
                    setSelected(item);
                    handleSelect(item.id);
                }}
                key={item.name}
            >
                {item.name}
            </Menu.Item>
        ));
        return (
            <>
                <Menu
                    onOpen={() => setOpened(true)}
                    onClose={() => setOpened(false)}
                    radius="md"
                    width="target"
                    withinPortal
                >
                    <Menu.Target>
                        <UnstyledButton className={cls.control} data-expanded={opened || undefined}>
                            <Group gap="xs">
                                <Image src={selected.icon} width={22} height={22}/>
                                <span className={cls.label}>{selected.name}</span>
                            </Group>
                            <IconChevronDown size="1rem" className={cls.icon} stroke={1.5}/>
                        </UnstyledButton>
                    </Menu.Target>
                    <Menu.Dropdown>{items}</Menu.Dropdown>
                </Menu>
            </>)

    }
    return (
        <>
            <Group justify="space-between">
                <Title order={3}>
                    <Group gap={2}>
                        <Image w={24} src={coin.icon} alt={coin.name}/>
                        {coin.name}
                    </Group>
                </Title>
                <Button variant='subtle' size="xs" text="Сменить валюту" onclick={() => setCoin(null)}/>
            </Group>
            <Divider my="md"/>
        </>
    );
}