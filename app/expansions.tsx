import Image from 'next/image'

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

const Expansions = () => {
    return (

        <div className="grid grid-cols-1 lg:grid-cols-3 h-screen relative ">

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