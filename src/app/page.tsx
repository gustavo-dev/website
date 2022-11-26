/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
    SiDocker,
    SiGit,
    SiMysql,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiPnpm,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiTailwindcss,
    SiTypescript,
    SiYarn,
} from 'react-icons/si';
import { ListItem } from 'src/app/ListItem';
import { PinnedRepo, ProjectCard } from 'src/app/ProjectCard';
import { SpotifyActivity } from 'src/app/SpotifyActivity';

async function getData(): Promise<PinnedRepo[]> {
    const response = await fetch(
        `https://gh-pinned-repos.egoist.dev/?username=${process.env.VERCEL_GIT_REPO_OWNER}`,
        {
            next: {
                revalidate: 60 * 60 * 24,
            },
        }
    );

    return response.json();
}

export default async function Page() {
    const pinnedRepos = await getData();

    return (
        <main className="mx-auto space-y-12 md:py-24">
            <div className="space-y-4">
                <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
                    <div className="flex items-center gap-4">
                        {/* <a
                            href={`https://github.com/${process.env.VERCEL_GIT_REPO_OWNER}`}
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer transition-all duration-200 hover:-translate-y-[2px]"
                        >
                            <SiGithub size={24} />
                        </a>
                        <a
                            href="https://twitter.com/tavin_dev"
                            target="_blank"
                            rel="noreferrer"
                            className="cursor-pointer hover:text-[#1DA1F2] transition-all duration-200 hover:-translate-y-[2px]"
                        >
                            <SiTwitter size={26} />
                        </a>
                        <a
                            href="discord://discordapp.com/users/315848583024869379"
                            rel="noreferrer"
                            className="flex items-center gap-3 cursor-pointer font-bold hover:text-[#7289DA] transition-all duration-200 hover:-translate-y-[2px] select-none flex-nowrap text-ellipsis"
                        >
                            <SiDiscord size={26} />
                        </a> */}
                    </div>
                    <SpotifyActivity />
                </div>
                <h1 className="text-3xl font-bold">Hi! I'm Gustavo!</h1>
                <p className="opacity-80">
                    I'm a 18 years old software developer from Brazil. I'm
                    really into full stack web development and problem solving
                    in general.
                </p>
            </div>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Things I do...</h2>
                <p className="opacity-80">
                    Most of the projects I've worked on are private, so I can't
                    link their source code. During the pandemic, I focused on
                    freelancing and haven't really contributed to open source
                    but below are a few of my public projects. Not many for now
                    but expect them to increase over time.
                </p>
                <div className="grid gap-2 sm:gap-4 sm:grid-cols-2">
                    {pinnedRepos.map((repo, i) => {
                        return <ProjectCard key={i} {...repo} />;
                    })}
                </div>
                <div className="space-y-2">
                    <p className="opacity-80">
                        A few of the private projects I've worked on are:
                    </p>
                    <ul className="space-y-2 list-disc opacity-80">
                        <div className="pl-12 space-y-2">
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.binance.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Binance
                                </a>{' '}
                                crypto trading bot
                            </li>
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.csgoempire.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    CSGOEmpire
                                </a>{' '}
                                Withdraw/Deposit bot
                            </li>
                            <li>
                                <a
                                    className="underline underline-offset-1"
                                    href="https://www.csgoroll.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    CSGORoll
                                </a>{' '}
                                Deposit bot
                            </li>
                        </div>
                    </ul>
                </div>

                <p className="opacity-80">
                    Feel free to contact me on Discord if you have any
                    questions!
                </p>
            </section>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Technologies I use</h2>
                <p className="opacity-80">
                    These are a few of the technologies I use in my projects.
                </p>
                <ul className="grid grid-cols-3 gap-5 sm:grid-cols-4">
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
                </ul>
            </section>
            {/* <section>
                <iframe
                    src="https://github.com/sponsors/tavindev/button"
                    title="Sponsor tavindev"
                    height="35"
                    width="116"
                    style={{ border: 0 }}
                ></iframe>
            </section> */}
        </main>
    );
}
