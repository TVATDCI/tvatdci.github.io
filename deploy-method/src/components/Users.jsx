import { useCustomHook } from "./useCustomHook";

const Users = () => {
    const users = useCustomHook("https://fakestoreapi.com/users");

    console.log(users);
    return <div>Users:
        {users && users.map((user) => (
            <div key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        ))}
    </div>;
};

export default Users;
