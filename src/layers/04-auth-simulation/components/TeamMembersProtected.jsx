import { useAuth } from "../context/useAuth";

function TeamMembersProtected() {
  const { user } = useAuth();

  if (!user) return <p>Please log in to view team members.</p>;

  return (
    <div>
      <h2>Protected Team Members View</h2>
      <p>Welcome, {user.name}! You now have access to team data.</p>
    </div>
  );
}

export default TeamMembersProtected;
