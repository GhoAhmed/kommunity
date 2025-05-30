import React from 'react'

const MyEvent = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div>MyEvent {id}</div>
    )
}

export default MyEvent