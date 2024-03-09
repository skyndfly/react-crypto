import {Group, Paper, Text, ThemeIcon, NumberFormatter} from '@mantine/core';
import {IconArrowUpRight, IconArrowDownRight} from '@tabler/icons-react';
import cls from './Stats.module.scss';
import {useContext} from "react";
import CryptoContext from "../../../../context/crypto-context.jsx";
import {TablePercentCard} from '../TablePercentCard/TablePercentCard.jsx';


export default function Stats() {
    const {assets} = useContext(CryptoContext)
    const stats = assets.map((stat) => {
        const DiffIcon = stat.grow > 0 ? IconArrowUpRight : IconArrowDownRight;

        return (
            <Paper withBorder p="md" radius="md" key={stat.id}>
                <Group justify="apart">
                    <div>
                        <Text c="dimmed" tt="uppercase" fw={700} fz="xs" className={cls.label}>
                            {stat.id}
                        </Text>
                        <Text
                            fw={700} fz="xl"
                            style={{
                                color: stat.grow > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
                            }}
                        >
                            <NumberFormatter decimalScale={2} prefix="$ " value={stat.totalAmount} thousandSeparator/>
                        </Text>
                    </div>
                    <ThemeIcon
                        color="gray"
                        variant="light"
                        style={{
                            color: stat.grow > 0 ? 'var(--mantine-color-teal-6)' : 'var(--mantine-color-red-6)',
                        }}
                        size={38}
                        radius="md"
                    >
                        <DiffIcon size="1.8rem" stroke={1.5}/>
                    </ThemeIcon>
                </Group>
                <TablePercentCard
                    elements={[
                        {
                            title: "Заработано",
                            value: stat.totalProfit,
                            withTag: {
                                percent: stat.growPercent,
                                grow: stat.grow
                            }
                        },
                        {
                            title: "Количество",
                            value: stat.amount,
                            isPlain: true
                        }
                    ]}
                />
                <Text c="dimmed" fz="sm" mt="md">
                    <span>* </span>
                    <Text component="span" c={stat.grow > 0 ? 'teal' : 'red'} fw={700}>
                        {stat.grow}%
                    </Text>{' '}

                    {stat.grow > 0 ? 'дохода' : 'убытка'} по сравнению с прошлым месяцем
                </Text>
            </Paper>
        );
    });

    return (
        <>
            {stats}
        </>
    );
}