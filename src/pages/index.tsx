/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react'
import type { GetStaticProps } from 'next'
import Image from 'next/future/image'

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
} from 'react-icons/si'

import { BiGitRepoForked } from 'react-icons/bi'

import { AiOutlineStar } from 'react-icons/ai'

import { ListItem } from 'src/components/list-item'
import { useLanyard } from 'use-lanyard'
import { animate } from 'motion'

export type PinnedRepo = {
    owner: string
    repo: string
    description: string
    language: string
    languageColor: string
    stars: string
    forks: string
}

type Props = {
    pinnedRepos: PinnedRepo[]
}

export const getStaticProps: GetStaticProps<Props> = async function () {
    const pinnedRepos = await fetch(
        'https://gh-pinned-repos.egoist.sh/?username=gustavo-dev'
    ).then(async (response) => response.json() as Promise<PinnedRepo[]>)

    return {
        props: { pinnedRepos },
        revalidate: 120,
    }
}

const ProjectCard: React.FC<PinnedRepo> = (project) => {
    return (
        <a
            href={`https://github.com/${project.owner}/${project.repo}`}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 py-4 px-5 space-y-3 border border-gray-600 rounded first-letter:cursor-pointer hover:scale-[1.02] duration-200 will-change-transform"
        >
            <div className="flex justify-between items-center">
                <h3 className="font-bold">{project.repo}</h3>
                <div className="flex justify-center items-center gap-2">
                    <div className="flex justify-center items-center gap-1">
                        <AiOutlineStar size={16} />
                        <span>{project.stars}</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <BiGitRepoForked size={16} />
                        <span>{project.forks}</span>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-600" />
            <p>{project.description}</p>
        </a>
    )
}

function AnimatedBars() {
    useEffect(() => {
        animate(
            '#bar1',
            {
                transform: [
                    'scaleY(1.0) translateY(0rem)',
                    'scaleY(1.5) translateY(-0.082rem)',
                    'scaleY(1.0) translateY(0rem)',
                ],
            },
            {
                duration: 1.0,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        )
        animate(
            '#bar2',
            {
                transform: [
                    'scaleY(1.0) translateY(0rem)',
                    'scaleY(3) translateY(-0.083rem)',
                    'scaleY(1.0) translateY(0rem)',
                ],
            },
            {
                delay: 0.2,
                duration: 1.5,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        )
        animate(
            '#bar3',
            {
                transform: [
                    'scaleY(1.0)  translateY(0rem)',
                    'scaleY(0.5) translateY(0.37rem)',
                    'scaleY(1.0)  translateY(0rem)',
                ],
            },
            {
                delay: 0.3,
                duration: 1.5,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        )
    }, [])

    return (
        <div className="w-auto flex gap-1 items-end overflow-hidden">
            <span id="bar1" className="w-[1.5px] h-2 bg-current opacity-75" />
            <span id="bar2" className="w-[1.5px] h-1 bg-current " />
            <span id="bar3" className="w-[2px] h-3 bg-current  opacity-80" />
        </div>
    )
}

const SpotifyActivity = () => {
    const { data } = useLanyard('315848583024869379')

    const trackId = data?.spotify?.track_id
    const song = data?.spotify?.song

    return (
        <div
            className="flex justify-center items-center gap-2 opacity-80 cursor-pointer group hover:opacity-100 transition-all duration-300 ease-out"
            onClick={() => {
                if (trackId) {
                    window.open(`https://open.spotify.com/track/${trackId}`)
                }
            }}
            aria-disabled={!trackId}
        >
            <div className="flex justify-center bg-gray-700 rounded">
                {data?.spotify && (
                    <Image
                        className="rounded-tl rounded-bl"
                        src={data.spotify.album_art_url}
                        width={35}
                        height={35}
                        alt="Album art"
                    />
                )}
                <div className="flex items-center gap-2 py-2 px-3 text-gray-200 group-hover:text-[#1DB954] transition-all duration-300 ease-out">
                    <span>{song ?? 'Not Playing'}</span>
                    {song ? <AnimatedBars /> : <SiSpotify />}
                </div>
            </div>
        </div>
    )
}

const Home: React.FC<Props> = ({ pinnedRepos }) => {
    // Not so sure if this is the best way to do this
    const [copiedToClipboard, setCopiedToClipboard] = React.useState(false)
    const copiedToClipboardTimeoutRef = React.useRef<NodeJS.Timeout>(
        setTimeout(() => {})
    )

    return (
        <>
            <div className="space-y-4">
                <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/gustavo-dev"
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
                        <div
                            onClick={() => {
                                navigator.clipboard.writeText('tavin#5205')
                                setCopiedToClipboard(true)

                                if (copiedToClipboardTimeoutRef.current) {
                                    clearTimeout(
                                        copiedToClipboardTimeoutRef.current
                                    )
                                }

                                copiedToClipboardTimeoutRef.current =
                                    setTimeout(() => {
                                        setCopiedToClipboard(false)
                                    }, 3000)
                            }}
                            className="flex items-center gap-3 cursor-pointer font-bold hover:text-[#7289DA] transition-all duration-200 hover:-translate-y-[2px] select-none flex-nowrap text-ellipsis"
                        >
                            <SiDiscord size={26} />
                            {copiedToClipboard && (
                                <span>Copied to clipboard!</span>
                            )}
                        </div>
                    </div>
                    <SpotifyActivity />
                </div>
                <h1 className="text-3xl font-bold">Hi! I'm Gustavo!</h1>
                <p className="opacity-80">
                    I'm a 18 years old software engineer from Brazil. I'm really
                    into full stack web development and problem solving in
                    general.
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
                        return <ProjectCard key={i} {...repo} />
                    })}
                </div>
                <div className="space-y-2">
                    <p className="opacity-80">
                        A few of the private projects I've worked on are:
                    </p>
                    <ul className="opacity-80 space-y-2 list-disc">
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
        </>
    )
}

export default Home
