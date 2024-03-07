import {Button as MantineButton} from "@mantine/core";
import React from "react";
export function Button({text, onclick = null}) {
    return (
        <MantineButton variant="filled" onClick={onclick}>
            {text}
        </MantineButton>
    )
}