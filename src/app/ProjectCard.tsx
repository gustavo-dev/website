'use client';

import { AiOutlineStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';

export type PinnedRepo = {
    owner: string;
    repo: string;
    description: string;
    language: string;
    languageColor: string;
    stars: string;
    forks: string;
};

export const ProjectCard: React.FC<PinnedRepo> = (project) => {
    return (
        <a
            href={`https://github.com/${project.owner}/${project.repo}`}
            target="_blank"
            rel="noreferrer"
            className="bg-gray-800 py-4 px-5 space-y-3 border border-gray-600 rounded first-letter:cursor-pointer hover:scale-[1.02] duration-200 will-change-transform"
        >
            <div className="flex items-center justify-between">
                <h3 className="font-bold">{project.repo}</h3>
                <div className="flex items-center justify-center gap-2">
                    <div className="flex items-center justify-center gap-1">
                        <AiOutlineStar size={16} />
                        <span>{project.stars}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                        <BiGitRepoForked size={16} />
                        <span>{project.forks}</span>
                    </div>
                </div>
            </div>
            <div className="border-b border-gray-600" />
            <p>{project.description}</p>
        </a>
    );
};
