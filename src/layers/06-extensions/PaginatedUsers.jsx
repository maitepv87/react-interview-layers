import { useState } from "react";

function PaginatedUsers({ users, pageSize = 5 }) {
  const [page, setPage] = useState(0);
  const start = page * pageSize;
  const paginated = users.slice(start, start + pageSize);

  return (
    <>
      <ul>
        {paginated.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <button disabled={page === 0} onClick={() => setPage(page - 1)}>
        Prev
      </button>
      <button
        disabled={start + pageSize >= users.length}
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
}

export default PaginatedUsers;
