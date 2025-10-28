import { useFetch } from "./hooks/useFetch";

function TeamMembersHooked() {
  const {
    data: members,
    isLoading,
    fetchError,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (isLoading) return <p>Loading team members, please wait...</p>;
  if (fetchError) return <p>Oops! {fetchError}. Try refreshing the page.</p>;
  if (members.length === 0) return <p>No team members found.</p>;

  return (
    <div>
      <h2>Team Members - Custom Hook</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            <strong>{member.name}</strong> — <em>{member.email}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TeamMembersHooked;
