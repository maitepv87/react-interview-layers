import { useTeamMembersContext } from "./context/useTeamMembersContext";

function TeamMembersWithContext() {
  const { state } = useTeamMembersContext();
  const { members, isLoading, error } = state;

  if (isLoading) return <p>Loading team members, please wait...</p>;
  if (error) return <p>Oops! {error}. Try refreshing the page.</p>;
  if (members.length === 0) return <p>No team members found.</p>;

  return (
    <div>
      <h2>Team Members - Context</h2>
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

export default TeamMembersWithContext;
