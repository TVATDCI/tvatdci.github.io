import React from "react";
import useCustomHook from "./useCustomHook";

const Users = () => {
    const users = useCustomHook("https://jsonplaceholder.typicode.com/users");

    console.log(users);

    return (
        <div>
            <h3>The Section below is made with custom hook!</h3>
            <h4>Users:</h4>
            {users && users.map((user) => (
                <div key={user.id}>
                    <h4>{user.name}</h4>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                </div>
            ))}
        </div>
    );
}

export default Users;