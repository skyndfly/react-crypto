import {Button as MantineButton} from "@mantine/core";
import React from "react";
export function Button({text, onclick = null, variant = null, size = null, disabled = null}) {
    return (
        <MantineButton variant={variant ? variant : 'filled'} onClick={onclick} size={size} disabled={disabled}>
            {text}
        </MantineButton>
    )
}