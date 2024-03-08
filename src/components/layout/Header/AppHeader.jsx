import {Button} from "../../shared/ui/Button/Button.jsx";
import React from "react";
import cls from './AppHeader.module.scss';
import {Container, Group} from "@mantine/core";
import ImageSelect from "../../shared/ui/ImageSelect/ImageSelect.jsx";


export default function AppHeader() {

    return (
        <header className={cls.header}>
            <Container fluid px={0}>
                <Group justify={'space-between'}>
                    <ImageSelect/>
                    <Button text="Добавить криптовалюту"/>
                </Group>
            </Container>
        </header>
    );
}