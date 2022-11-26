'use client';

import { animate } from 'motion';
import Image from 'next/image';
import { useEffect } from 'react';
import { SiSpotify } from 'react-icons/si';
import { useLanyard } from 'use-lanyard';

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
        );
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
        );
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
        );
    }, []);

    return (
        <div className="flex items-end w-auto gap-1 overflow-hidden">
            <span id="bar1" className="w-[1.5px] h-2 bg-current opacity-75" />
            <span id="bar2" className="w-[1.5px] h-1 bg-current " />
            <span id="bar3" className="w-[2px] h-3 bg-current  opacity-80" />
        </div>
    );
}

export const SpotifyActivity = () => {
    const { data } = useLanyard('315848583024869379');

    const trackId = data?.spotify?.track_id;
    const song = data?.spotify?.song;

    return (
        <div
            className="flex items-center justify-center gap-2 transition-all duration-300 ease-out cursor-pointer opacity-80 group hover:opacity-100"
            onClick={() => {
                if (trackId) {
                    window.open(`https://open.spotify.com/track/${trackId}`);
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
    );
};
