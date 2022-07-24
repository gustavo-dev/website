import React from 'react'
import type { GetStaticProps } from 'next'

import {
    SiAmazonaws,
    SiBabel,
    SiDocker,
    SiGit,
    SiGithub,
    SiGo,
    SiJava,
    SiMongodb,
    SiMysql,
    SiNextdotjs as SiNextDotJs,
    SiNodedotjs as SiNodeDotJs,
    SiPnpm,
    SiPostgresql,
    SiReact,
    SiRedis,
    SiStyledcomponents as SiStyledComponents,
    SiTailwindcss,
    SiTwitter,
    SiTypescript,
    SiWebpack,
    SiWebstorm,
    SiYarn,
} from 'react-icons/si'
import Head from 'next/head'
import { ListItem } from 'src/pages/components/list-item'

type User = {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    site_admin: boolean
    name: string
    company: string
    blog: string
    location: string
    email: string | null
    hireable: boolean
    bio: string
    twitter_username: string
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: string
    updated_at: string
}

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

const Home: React.FC<Props> = ({ pinnedRepos }) => {
    return (
        <>
            <div className="space-y-4">
                <div>
                    <SiGithub size={24} />
                </div>
                <h1 className="text-3xl font-bold">Hi! I am Gustavo!</h1>
                <p className="opacity-80">
                    I'm a 18 years old software engineer from Brazil. I'm really
                    into full stack web development (I'm also a big fan o
                    NextJs) and problem solving in general.
                </p>
            </div>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Things I do...</h2>
                <p className="opacity-80">Most of the projects I've done </p>
                <div>
                    {pinnedRepos.map((repo, i) => {
                        return <div key={`repo-${i}`}>{repo.description}</div>
                    })}
                </div>
            </section>
            <section className="space-y-4">
                <h2 className="text-2xl font-bold">Technologies I use</h2>
                <p className="opacity-80">
                    These are the technologies I mostly use to tackle my day to
                    day problems.
                </p>
                <ul className="grid grid-cols-3 gap-4 sm:grid-cols-4">
                    <ListItem icon={SiGithub} text="Github" />
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
                </ul>
            </section>
        </>
    )
}

export default Home
