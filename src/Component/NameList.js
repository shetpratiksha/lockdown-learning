import React from 'react'
import PersonList from './PersonList';

function NameList() {
    const person = [
        {
            id:1,
            name:'prat',
            skill:'react'
        },
        {
            id:2,
            name:'prati',
            skill:'node'
        }
    ]

    const personList = person.map(person => <PersonList key={person.id} person={person}/>)
    return (
        <div id="personData" >
            {personList}
            
        </div>
    )
}

export default NameList
