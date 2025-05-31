import React from 'react'

const MyProject = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>Project {id}</div>
    )
}

export default MyProject