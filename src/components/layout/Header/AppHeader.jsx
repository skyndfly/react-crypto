import React from "react";
import cls from './AppHeader.module.scss';
import {Container, Group, Modal} from "@mantine/core";
import ImageSelect from "../../shared/ui/ImageSelect/ImageSelect.jsx";
import {AddCryptoModal} from "../../widgets/AddCryptoModal/AddCryptoModal.jsx";
import {Button} from "../../shared/ui/Button/Button.jsx";
import {useDisclosure} from "@mantine/hooks";


export default function AppHeader() {
    const [opened, {open, close}] = useDisclosure(false);
    return (
        <header className={cls.header}>
            <Container fluid px={0} >
                <Group justify={'space-between'}>
                    <ImageSelect/>
                    <Button text="Добавить криптовалюту" onclick={open}/>
                    <Modal size={700} opened={opened} onClose={close} title="Добавить криптовалюту">

                        <AddCryptoModal />


                    </Modal>
                </Group>
            </Container>
        </header>
    );
}