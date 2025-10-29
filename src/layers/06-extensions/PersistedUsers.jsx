import { useEffect, useState } from "react";

function PersistedUsers() {
  const [users, setUsers] = useState(() =>
    JSON.parse(localStorage.getItem("users") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}

export default PersistedUsers;
