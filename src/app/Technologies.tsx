'use client';

import React from 'react';
import {
    SiDiscord,
    SiDocker,
    SiGit,
    SiGithub,
    SiMysql,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiPnpm,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiSpotify,
    SiTailwindcss,
    SiTwitter,
    SiTypescript,
    SiYarn,
} from 'react-icons/si';
import { ListItem } from 'src/app/ListItem';

export default function Technologies() {
    return (
        <>
            <ListItem icon={SiGit} text="Git" />
            <ListItem icon={SiReact} text="React" />
            <ListItem icon={SiNextDotJs} text="NextJs" />
            <ListItem icon={SiNodeDotJs} text="NodeJs" />
            <ListItem icon={SiTypescript} text="TypeScript" />
            <ListItem icon={SiPnpm} text="Pnpm" />
            <ListItem icon={SiYarn} text="Yarn" />
            <ListItem icon={SiMysql} text="MySQL" />
            <ListItem icon={SiPostgresql} text="PostgreSQL" />
            <ListItem icon={SiRedis} text="Redis" />
            <ListItem icon={SiDocker} text="Docker" />
            <ListItem icon={SiTailwindcss} text="TailwindCSS" />
        </>
    );
}
