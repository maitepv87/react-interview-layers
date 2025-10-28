import { createContext, useContext } from "react";
import { useTeamMembersReducer } from "./useTeamMembersReducer";

// Create the context
export const TeamMembersContext = createContext();

// Provider that wraps the app
export const TeamMembersProvider = ({ children }) => {
  const { state, dispatch } = useTeamMembersReducer();

  return (
    <TeamMembersContext.Provider value={{ state, dispatch }}>
      {children}
    </TeamMembersContext.Provider>
  );
};

// Hook to consume the context
export const useTeamMembersContext = () => {
  const context = useContext(TeamMembersContext);
  if (!context) {
    throw new Error(
      "useTeamMembersContext must be used within a <TeamMembersProvider>"
    );
  }
  return context;
};
