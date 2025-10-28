import { useEffect, useState } from "react";

function TeamMembersBasic() {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    // Fetch team members when the component mounts
    const fetchTeamMembers = async () => {
      try {
        setIsLoading(true);

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to load team members");
        }

        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setFetchError(error.message || "Unexpected error fetching data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (isLoading) return <p>Loading team members, please wait...</p>;
  if (fetchError) return <p>Oops! {fetchError}. Try refreshing the page.</p>;
  if (members.length === 0) return <p>No team members found.</p>;

  return (
    <div>
      <h2>Team Members - Basic Fetch</h2>
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

export default TeamMembersBasic;
