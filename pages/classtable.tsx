'use client'
import Image from "next/image"
import Head from 'next/head';
import React, { useState } from 'react';

interface ClassInfo {
    name: string;
    src: string;
}

const ClassTable: React.FC = () => {

    const toggleClass = (className: string) => {
        setSelectedClasses((prevSelectedClasses) =>
            prevSelectedClasses.includes(className)
                ? prevSelectedClasses.filter((c) => c !== className)
                : [...prevSelectedClasses, className]
        );
    };


    const classData: ClassInfo[] = [
        { name: 'Death Knight', src: '/classes/deathknight_orig.png' },
        { name: 'Demon Hunter', src: '/classes/demonhunter_orig.png' },
        { name: 'Druid', src: '/classes/druid_orig.png' },
        { name: 'Evoker', src: '/classes/evoker_orig.png' },
        { name: 'Hunter', src: '/classes/hunter.png' },
        { name: 'Mage', src: '/classes/mage.png' },
        { name: 'Monk', src: '/classes/monk.png' },
        { name: 'Paladin', src: '/classes/paladin_orig.png' },
        { name: 'Priest', src: '/classes/priest_orig.png' },
        { name: 'Rogue', src: '/classes/rogue_orig.png' },
        { name: 'Shaman', src: '/classes/shaman_orig.png' },
        { name: 'Warlock', src: '/classes/warlock_orig.png' },
        { name: 'Warrior', src: '/classes/warrior_orig.png' },
    ];

    // Get all class names from classData array
    const allClassNames = classData.map((classInfo) => classInfo.name);

    // Initially set all classes as selected
    const [selectedClasses, setSelectedClasses] = useState<string[]>(allClassNames);

    return (
        <div>
            <Head>
                <title>Class Table</title>
            </Head>


            <div className="bg-slate-500 p-4">
                <table>
                    <tbody>
                        <tr>
                            {classData.map((classInfo) => (
                                <td key={classInfo.name}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedClasses.includes(classInfo.name)}
                                            onChange={() => toggleClass(classInfo.name)}
                                        />
                                        <img
                                            src={classInfo.src}
                                            alt={`${classInfo.name} class icon`}
                                            width={100}
                                            height={100}
                                            className={
                                                selectedClasses.includes(classInfo.name)
                                                    ? 'bg-dark rounded'
                                                    : 'bg-transparent'
                                            }
                                        />
                                        <div>{classInfo.name}</div>
                                    </label>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Selected Classes:</h3>
                    <ul>
                        {selectedClasses.map((className) => (
                            <li key={className}>{className}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ClassTable;
