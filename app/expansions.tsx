"use client"
import Image from 'next/image'
import { useState } from 'react'

const Expansion = ({ logo, background }: { logo: string, background: string }) => {

    return (
        <div className="section grayscale flex justify-center items-center hover-scale " style={{ backgroundImage: `url('/${background}')` }}>
            <div className="text-white text-center p-8">
                <Image
                    className="relative "
                    src={`/${logo}`}
                    alt="Next.js Logo"
                    width={500}
                    height={300}
                    priority
                />
            </div>
        </div>
    )
}


const FullScreenDiv: React.FC = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        setIsFullScreen((prevState) => !prevState);
    };

    return (
        <div
            id="fullScreenDiv"
            className={`border p-4 cursor-pointer ${isFullScreen ? 'fullscreen' : ''}`}
            onClick={handleFullScreen}
        >
            Click to go full screen
        </div>
    );
};

const Expansions = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    const handleFullScreen = () => {
        setIsFullScreen((prevState) => !prevState);
    };

    if (isFullScreen) {
        return (
            <div className={`grid grid-cols-1 h-screen relative`} onClick={handleFullScreen}>
                <Expansion
                    logo="World-of-Warcraft-Logo.png"
                    background="dragonflight.jpg"
                />
            </div>
        )
    }

    return (
        <div className={`grid grid-cols-3 h-screen relative ${isFullScreen ? 'hidden' : ''}`} onClick={handleFullScreen}>

            <Expansion
                logo="wowclassichardcore.png"
                background="classic.jpg"
            />
            <Expansion
                logo="wotlk.webp"
                background="wrath.jpg"
            />
            <Expansion
                logo="World-of-Warcraft-Logo.png"
                background="dragonflight.jpg"
            />
        </div>

    )
}

export default Expansions;