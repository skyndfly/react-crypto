import {Button} from "../../shared/ui/Button/Button.jsx";
import React from "react";
import cls from './AppHeader.module.scss';
import {Group} from "@mantine/core";
import ImageSelect from "../../shared/ui/ImageSelect/ImageSelect.jsx";


export default function AppHeader() {

    return (
        <header className={cls.header}>
           <Group>
                <ImageSelect />
               <Button text="Добавить криптовалюту" />
           </Group>
        </header>
    );
}