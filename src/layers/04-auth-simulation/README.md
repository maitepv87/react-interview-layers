# 04 – Auth Simulation

This scenario introduces `React Context` to simulate authentication and protect components based on login state. It separates the context, provider, actions, and consumption hook for clarity and modularity. The goal is to demonstrate how global auth state can conditionally render views and prepare for role-based access.

## Techniques Used

- `createContext` and `useContext` to share global auth state
- `useState` to manage login/logout transitions
- Custom hook (`useAuth`) for safe and modular consumption
- Action file (`authActions.js`) for editorial clarity and maintainability
- Conditional rendering based on `user` presence

## Folder Structure

04-auth-simulation/
├── components/
│ ├── LoginPanel.jsx
│ ├── TeamMembersProtected.jsx
├── context/
│ ├── AuthContext.js
│ ├── AuthProvider.jsx
│ ├── useAuth.js
│ ├── authActions.js
├── README.md

## Next Step

Use `AuthContext` to conditionally validate forms or restrict access to team data. Extend with roles (`admin`, `viewer`) or persist sessions using localStorage.
