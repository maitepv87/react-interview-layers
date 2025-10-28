# 03 – Context Integration

This scenario introduces `React Context` to share the team members' state across components without prop drilling. It uses a reducer to manage the async lifecycle and wraps the consuming component in a `TeamMembersProvider`.

## Techniques Used

- `createContext` and `useContext` to share global state
- `useReducer` to manage async transitions (`loading`, `success`, `error`)
- `useEffect` to trigger the fetch on mount
- Custom hook (`useTeamMembersContext`) for safe and modular consumption
- Action types for editorial clarity and maintainability

## Folder Structure

03-context-integration/
├── TeamMembersWithContext.jsx
├── context/
│ ├── useTeamMembersContext.jsx
│ ├── useTeamMembersReducer.js
│ ├── actionTypes.js
├── README.md

## Next Step

Simulate authentication or role-based access using an `AuthContext`, or combine multiple contexts into a layout-level provider.
