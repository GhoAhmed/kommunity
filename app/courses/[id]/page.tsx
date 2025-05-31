import React from 'react'

const MyCourse = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>Course {id}</div>
    )
}


export default MyCourse