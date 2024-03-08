import {Group, Image, Menu, UnstyledButton} from "@mantine/core";
import cls from "./ImageSelect.module.scss";
import {IconChevronDown} from "@tabler/icons-react";
import React, {useState} from "react";
import {useCrypto} from "../../../../context/crypto-context.jsx";

export default function ImageSelect(){
    const {crypto} = useCrypto();
    function handleSelect(val){
        console.log(val)
    }
    const [opened, setOpened] = useState(false);
    const [selected, setSelected] = useState(crypto[0]);
    const items = crypto.map((item) => (
        <Menu.Item
            leftSection={<Image src={item.icon} width={18} height={18} />}
            onClick={() => {setSelected(item); handleSelect(item.name);}}
            key={item.name}
        >
            {item.name}
        </Menu.Item>
    ));
    return(
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
                        <Image src={selected.icon} width={22} height={22} />
                        <span className={cls.label}>{selected.name}</span>
                    </Group>
                    <IconChevronDown size="1rem" className={cls.icon} stroke={1.5} />
                </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>{items}</Menu.Dropdown>
        </Menu>
    );
}