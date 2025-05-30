import Link from 'next/link'
import React from 'react'

const Event = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/research/events/1">
                        Event 1
                    </Link>
                </li>
                <li>
                    <Link href="/research/events/2">
                        Event 2
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Event