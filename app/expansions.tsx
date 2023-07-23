"use client"
import Image from 'next/image'
import { useState } from 'react'

const Expansion = ({ id, selectExpansion, logo, background }: { id: string, selectExpansion: (id: string) => void, logo: string, background: string }) => {

    return (
        <div className="section grayscale flex justify-center items-center hover-scale " style={{ backgroundImage: `url('/${background}')` }} onClick={() => selectExpansion(id)}>
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

const Expansions = () => {
    const [selected, setSelected] = useState<string | null>(null);

    const selectExpansion = (id: string) => {
        setSelected(id);
    };


    if (selected) {
        return (
            <div >
                {selected}
                <button onClick={() => setSelected(null)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">&larr; Go back </button>
            </div>
        )
    }

    return (
        <div className={`grid grid-cols-3 h-screen relative `} >

            <Expansion
                selectExpansion={selectExpansion}
                id="classic"
                logo="wowclassichardcore.png"
                background="classic.jpg"
            />
            <Expansion
                selectExpansion={selectExpansion}
                id="wotlk"
                logo="wotlk.webp"
                background="wrath.jpg"
            />
            <Expansion
                selectExpansion={selectExpansion}
                id="dragonflight"
                logo="World-of-Warcraft-Logo.png"
                background="dragonflight.jpg"
            />
        </div>

    )
}

export default Expansions;