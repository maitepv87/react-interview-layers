import { useState } from "react";

function RetryOnError({ fetchUsers }) {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
      setError(null);
    } catch (err) {
      setError("Failed to load users. Try again.");
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <button onClick={load}>Load Users</button>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </>
  );
}

export default RetryOnError;
