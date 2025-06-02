import React from 'react'

const MyProject = ({ params }: { params: { id: string } }) => {

    return (
        <div className="flex flex-col min-h-screen px-6 sm:px-10 md:px-20 lg:px-32 py-16 sm:py-20 md:py-24">
            <h1 className="text-4xl font-bold mb-8 text-center">Project {params.id}</h1>
        </div>
    )
}

export default MyProject