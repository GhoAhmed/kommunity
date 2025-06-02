import Link from 'next/link'
import React from 'react'

const Project = () => {
    return (
        <div className="flex flex-col min-h-screen px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Projcets</h1>
            <ul>
                <li>
                    <Link href="/projects/1">
                        Project 1
                    </Link>
                </li>
                <li>
                    <Link href="/projects/2">
                        Project 2
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Project