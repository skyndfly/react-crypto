import {Button} from "../Button/Button.jsx";
import { useDisclosure } from '@mantine/hooks';
import {Group, Modal as ModalMantine} from '@mantine/core';
export function Modal(){
    const [opened, { open, close }] = useDisclosure(false);
    return(
        <>
            <ModalMantine opened={opened} onClose={close} title="Добавить криптовалюту" centered>

                <div>
                    <Group justify='end'>
                        <Button text="Закрыть" onclick={close} variant='outline'/>
                        <Button text="Добавить" />
                    </Group>
                </div>
            </ModalMantine>
            <Button text="Добавить криптовалюту" onclick={open}/>
        </>
    );
}