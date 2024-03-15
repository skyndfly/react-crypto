import React, {useState} from "react";
import cls from './AppHeader.module.scss';
import {Container, Group, Modal} from "@mantine/core";
import ImageSelect from "../../shared/ui/ImageSelect/ImageSelect.jsx";
import {AddCryptoModal} from "../../widgets/AddCryptoModal/AddCryptoModal.jsx";
import {Button} from "../../shared/ui/Button/Button.jsx";
import {useDisclosure} from "@mantine/hooks";


export default function AppHeader() {
    const [openModal, setModal] = useState(false);
    return (
        <header className={cls.header}>
            <Container fluid px={0}>
                <Group justify={'space-between'}>
                    <ImageSelect/>
                    <Button text="Добавить криптовалюту" onclick={() => setModal(true)}/>
                    <Modal size={700} opened={openModal} onClose={() => setModal(false)} title="Добавить криптовалюту">
                        <AddCryptoModal onClose={() => setModal(false)}/>
                    </Modal>
                </Group>
            </Container>
        </header>
    );
}