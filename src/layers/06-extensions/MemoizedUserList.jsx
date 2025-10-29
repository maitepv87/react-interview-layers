import React from "react";

const MemoizedUserList = React.memo(({ users }) => {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
});

export default MemoizedUserList;
