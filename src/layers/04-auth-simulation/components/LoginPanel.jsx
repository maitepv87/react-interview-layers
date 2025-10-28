import { useAuth } from "../context/useAuth";

function LoginPanel() {
  const { user, login, logout } = useAuth();

  return (
    <div style={{ marginBottom: "1rem" }}>
      {user ? (
        <>
          <p>
            Logged in as <strong>{user.name}</strong>
          </p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={login}>Login</button>
        </>
      )}
    </div>
  );
}

export default LoginPanel;
