import {Divider, Group, Image, Menu, Title, UnstyledButton, NumberInput, Input} from '@mantine/core';
import React, {useState} from "react";
import cls from "./AddCryptoModal.module.scss";
import {IconChevronDown} from "@tabler/icons-react";
import {useCrypto} from "../../../context/crypto-context.jsx";
import {Button} from "../../shared/ui/Button/Button.jsx";
import {notifications} from "@mantine/notifications";
import {IconCheck} from '@tabler/icons-react';

export function AddCryptoModal({onClose}) {
    const {crypto} = useCrypto();
    const [opened, setOpened] = useState(false);
    const [coin, setCoin] = useState(null);
    const [selected, setSelected] = useState(crypto[0]);
    const [coinAmount, setCoinAmount] = useState(0);
    const [price, setPrice] = useState(0);

    function onChangeAmount(val) {
        setCoinAmount(val);
        if (val > -1) {
            setPrice(val * coin.price);
        }
    }

    function handleClickAdd() {
        notifications.show({
            icon: <IconCheck/>,
            color: 'teal',
            title: 'Транзакция совершена!',
            message: `Купленно вылюты ${coin.name} на ${price.toFixed(4)}$`,
        })
        setCoinAmount(0);
    }

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
            <form>
                <div>
                    <NumberInput
                        label="Количество"
                        value={coinAmount}
                        withAsterisk
                        onChange={onChangeAmount}
                        error={coinAmount < 0 && 'Значение не может быть меньше 0'}
                        className={cls.amount}
                    />
                    <Input.Wrapper label="Цена" className={cls.amount}>
                        <Input readOnly value={coin.price.toFixed(4)}/>
                    </Input.Wrapper>
                    <Input.Wrapper label="Стоимость">
                        <Input readOnly value={price.toFixed(4)}/>
                    </Input.Wrapper>
                </div>
            </form>
            <Divider my="md"/>
            <Group justify='end'>
                <Button text="Закрыть" onclick={onClose} variant='outline'/>
                <Button onclick={handleClickAdd} text="Добавить" disabled={coinAmount < 1 && true}/>
            </Group>
        </>
    );
}