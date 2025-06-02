import Link from 'next/link'
import React from 'react'

const Course = () => {
    return (
        <div className="flex flex-col min-h-screen px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Courses</h1>
            <ul>
                <li>
                    <Link href="/courses/1">
                        Course 1
                    </Link>
                </li>
                <li>
                    <Link href="/courses/2">
                        Course 2
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Course