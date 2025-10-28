import { useState } from "react";
import TeamMembersList from "./layers/01-basic-fetch/TeamMembersList";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Scenarios Layers</h1>

      <nav style={{ marginBottom: "1rem" }}>
        <button onClick={() => setView("basic")}>01 – Basic Fetch</button>
        {/* <button onClick={() => setView('hook')}>02 – Custom Hook</button>
        <button onClick={() => setView('context')}>03 – Context</button> */}
      </nav>

      {view === "basic" && <TeamMembersList />}
      {/* {view === 'hook' && <UseFetchExample />}
      {view === 'context' && <AuthContextExample />} */}
    </div>
  );
}

export default App;
