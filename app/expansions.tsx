import Image from 'next/image'
import Link from 'next/link'



const Expansion = ({ logo }: { logo: string }) => {

    return (
        <Link
            href="/classic  "
            className="group rounded-lg border border-transparent px-5 py-4"
            rel="noopener noreferrer"
        >

            <Image
                className="relative hover:scale-125 transition-transform transform duration-500"
                src={`/${logo}`}
                alt="Next.js Logo"
                width={300}
                height={150}
                priority
            />
        </Link >
    )
}

const Expansions = () => {
    return (


        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
            <Expansion
                logo="wowclassichardcore.png"
            />
            <Expansion
                logo="wotlk.webp"
            />
            <Expansion
                logo="World-of-Warcraft-Logo.png"
            />
        </div>

    )
}

export default Expansions;