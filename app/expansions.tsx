"use client"
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const Expansion = ({ logo, background }: { id: string, logo: string, background: string }) => {

    return (
        <div
            className="section grayscale flex justify-center items-center hover-scale"
            style={{ backgroundImage: `url('/backgrounds/${background}')` }}
        >
            <Link href={'/classtable'}>
                <div className="text-white text-center p-8">
                    <Image
                        className="relative "
                        src={`/logos/${logo}`}
                        alt="Next.js Logo"
                        width={500}
                        height={300}
                        priority
                    />
                </div>
            </Link>
        </div>
    )
}

const Expansions = () => {


    return (
        <div className={`grid grid-cols-3 h-screen relative `} >
            <Expansion
                id="classic"
                logo="classic.png"
                background="classic.jpg"
            />
            <Expansion
                id="wotlk"
                logo="wotlk.webp"
                background="wotlk.jpg"
            />
            <Expansion
                id="dragonflight"
                logo="dragonflight.png"
                background="dragonflight.jpg"
            />
        </div>

    )
}

export default Expansions;