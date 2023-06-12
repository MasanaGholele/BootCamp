import React from 'react'
import useFetch from './useFetch'
const Users = () => {
    const users = useFetch("https://jsonplaceholder.typicode.com/users")
    return (
        <ul>
            {users.map(el => (//
                <li key={el.id}>{el.name}</li>
            ))}
        </ul>
    )
}
export default Users;