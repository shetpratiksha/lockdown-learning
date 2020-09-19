import React from 'react'

function PersonList({person}) {
    return (
        <div>
            <h1>I am {person.name}. I know {person.skill}</h1>
        </div>
    )
}

export default PersonList
