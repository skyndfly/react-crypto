import {Badge, Group, NumberFormatter, Table as MantineTable} from '@mantine/core';
import React from "react";
export function TablePercentCard({elements}){
    const rows = elements.map((element) => (
        <MantineTable.Tr key={element.title}>
            <MantineTable.Td>{element.title}</MantineTable.Td>
            <MantineTable.Td>
               <Group>
                   {element.withTag &&
                       <Badge size="lg" radius="sm" color={element.withTag.grow ? 'teal' : 'red'}>
                           {element.withTag.percent}%<span> *</span>
                       </Badge>
                   }
                   <NumberFormatter decimalScale={2} suffix=" $" value={element.value} thousandSeparator/>
               </Group>
            </MantineTable.Td>
        </MantineTable.Tr>
    ));

    return (
        <MantineTable>
            <MantineTable.Tbody>{rows}</MantineTable.Tbody>
        </MantineTable>
    );

}