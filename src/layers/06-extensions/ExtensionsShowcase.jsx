import FilterUsers from "./FilterUsers";
import MemoizedUserList from "./MemoizedUserList";
import PaginatedUsers from "./PaginatedUsers";
import PersistedUsers from "./PersistedUsers";
import ResponsiveFilteredUsers from "./ResponsiveFilteredUsers";
import RetryOnError from "./RetryOnError";

const sampleUsers = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Luis" },
  { id: 3, name: "Jonas" },
  { id: 4, name: "Maité" },
  { id: 5, name: "Carlos" },
  { id: 6, name: "Elena" },
];

function ExtensionsShowcase() {
  return (
    <div style={{ display: "grid", gap: "2rem" }}>
      <h2>FilterUsers</h2>
      <FilterUsers users={sampleUsers} />

      <h2>MemoizedUserList</h2>
      <MemoizedUserList users={sampleUsers} />

      <h2>PaginatedUsers</h2>
      <PaginatedUsers users={sampleUsers} />

      <h2>PersistedUsers</h2>
      <PersistedUsers />

      <h2>ResponsiveFilteredUsers</h2>
      <ResponsiveFilteredUsers users={sampleUsers} />

      <h2>RetryOnError</h2>
      <RetryOnError fetchUsers={() => Promise.resolve(sampleUsers)} />
    </div>
  );
}

export default ExtensionsShowcase;
