import { useAuth } from "../context/useAuth";
import { loginAction, logoutAction } from "../context/authActions";

function LoginPanel() {
  const { state, dispatch } = useAuth();
  const { user, isAuthenticated } = state;

  const handleLogin = () => {
    dispatch(loginAction({ name: "Maite" }));
  };

  const handleLogout = () => {
    dispatch(logoutAction());
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      {isAuthenticated ? (
        <>
          <p>
            Logged in as <strong>{user.name}</strong>
          </p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <p>You are not logged in.</p>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
}

export default LoginPanel;
