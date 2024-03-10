import {Group, Image, Menu, Modal, UnstyledButton} from "@mantine/core";
import cls from "./ImageSelect.module.scss";
import {IconChevronDown} from "@tabler/icons-react";
import React, {useEffect, useState} from "react";
import {useCrypto} from "../../../../context/crypto-context.jsx";
import CoinInfoModal from "../../../widgets/CoinInfoModal/CoinInfoModal.jsx";
import {Button} from "../Button/Button.jsx";

export default function ImageSelect() {

    const {crypto} = useCrypto();
    const [openModal, setModal] = useState(false);
    const [coin, setCoin] = useState(null);
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(crypto[0]);

    function handleSelect(val) {
        setCoin(crypto.find((c) => c.id === val))
        setModal(true);
    }

    useEffect(() => {
        const keypress = event => {
            if (event.key === '/') {
                setOpened(true);
            }
        }
        document.addEventListener('keypress', keypress);
        return () => document.removeEventListener('keypress', keypress);
    }, []);

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
            <Modal opened={ openModal} onClose={() => setModal(false)} withCloseButton={true} title='Информация'>
                <CoinInfoModal coin={coin} />
                <Group justify='end'>
                    <Button text="Закрыть" onclick={()=> setModal(false)} variant='outline'/>
                    <Button text="Добавить" />
                </Group>
            </Modal>
        </>
    );
}