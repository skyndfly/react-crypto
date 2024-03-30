import {useState} from 'react';
import {
    Table,
    ScrollArea,
    UnstyledButton,
    Group,
    Text,
    Center,
    TextInput,
    rem,
    keys,
} from '@mantine/core';
import {IconSelector, IconChevronDown, IconChevronUp, IconSearch} from '@tabler/icons-react';
import classes from './AssetsTable.module.scss';
import {useCrypto} from "../../../context/crypto-context.jsx";

function Th({children, reversed, sorted, onSort}) {
    const Icon = sorted ? (reversed ? IconChevronUp : IconChevronDown) : IconSelector;
    return (
        <Table.Th className={classes.th}>
            <UnstyledButton onClick={onSort} className={classes.control}>
                <Group justify="space-between">
                    <Text fw={500} fz="sm">
                        {children}
                    </Text>
                    <Center className={classes.icon}>
                        <Icon style={{width: rem(16), height: rem(16)}} stroke={1.5}/>
                    </Center>
                </Group>
            </UnstyledButton>
        </Table.Th>
    );
}

function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item) =>
        keys(data[0]).some((key) => item[key].toLowerCase().includes(query))
    );
}

function sortData(data, payload) {
    const {sortBy} = payload;

    if (!sortBy) {
        return filterData(data, payload.search);
    }

    return filterData(
        [...data].sort((a, b) => {
            if (payload.reversed) {
                return b[sortBy].localeCompare(a[sortBy]);
            }

            return a[sortBy].localeCompare(b[sortBy]);
        }),
        payload.search
    );
}


function AssetsTable() {
    const [search, setSearch] = useState('');

    const [sortBy, setSortBy] = useState(null);
    const [reverseSortDirection, setReverseSortDirection] = useState(false);
    const {assets} = useCrypto();
    const data = assets.map((a) => ({
        name: a.name,
        price: a.price,
        amount: a.amount
    }))
    const [sortedData, setSortedData] = useState(data);
    const setSorting = (field) => {
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, {sortBy: field, reversed, search}));
    };

    const handleSearchChange = (event) => {
        const {value} = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, {sortBy, reversed: reverseSortDirection, search: value}));
    };

    const rows = sortedData.map((row) => (
        <Table.Tr key={row.name}>
            <Table.Td>{row.name}</Table.Td>
            <Table.Td>{row.price}</Table.Td>
            <Table.Td>{row.amount}</Table.Td>
        </Table.Tr>
    ));

    return (
        <ScrollArea>
            <TextInput
                placeholder="Search by any field"
                mb="md"
                leftSection={<IconSearch style={{width: rem(16), height: rem(16)}} stroke={1.5}/>}
                value={search}
                onChange={handleSearchChange}
            />
            <Table horizontalSpacing="md" verticalSpacing="xs" miw={700} layout="fixed">
                <Table.Tbody>
                    <Table.Tr>
                        <Th
                            sorted={sortBy === 'name'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('name')}
                        >
                            Название
                        </Th>
                        <Th
                            sorted={sortBy === 'price'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('price')}
                        >
                            Стоимость
                        </Th>
                        <Th
                            sorted={sortBy === 'amount'}
                            reversed={reverseSortDirection}
                            onSort={() => setSorting('amount')}
                        >
                            Количество
                        </Th>
                    </Table.Tr>
                </Table.Tbody>
                <Table.Tbody>
                    {rows.length > 0 ? (
                        rows
                    ) : (
                        <Table.Tr>
                            <Table.Td colSpan={Object.keys(data[0]).length}>
                                <Text fw={500} ta="center">
                                    Nothing found
                                </Text>
                            </Table.Td>
                        </Table.Tr>
                    )}
                </Table.Tbody>
            </Table>
        </ScrollArea>
    );
}

export default AssetsTable;