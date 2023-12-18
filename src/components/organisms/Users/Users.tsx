import { v4 as uuidv4 } from "uuid";
import { useGetUsersQuery } from "src/components/features/users/usersApiSlice";

const Users = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();
  return (
    <div>
      <h2>Users list</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : users?.length ? (
        <ul>
          {users.map((user) => (
            <li key={uuidv4()}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No users to display</p>
      )}
    </div>
  );
};

export default Users;
