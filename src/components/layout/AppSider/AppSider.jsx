import React from "react";
import Stats from "../../shared/ui/Stats/Stats.jsx";
import cls from "../../shared/ui/Stats/Stats.module.scss";
import {SimpleGrid} from "@mantine/core";

export default function AppSider() {
    return (
        <div className={cls.root}>
            <SimpleGrid cols={{base: 1}}>
                <Stats/>
            </SimpleGrid>
        </div>

)
    ;
}