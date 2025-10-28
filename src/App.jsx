import { useState } from "react";
import TeamMembersBasic from "./layers/01-basic-fetch/TeamMembersBasic";
import TeamMembersHooked from "./layers/02-custom-hook/TeamMembersHooked";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Scenarios Layers</h1>

      <nav style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setView("basic")}>01 – Basic Fetch</button>
        <button onClick={() => setView("hook")}>02 – Custom Hook</button>
        {/*<button onClick={() => setView('context')}>03 – Context</button> */}
      </nav>

      {view === "basic" && <TeamMembersBasic />}
      {view === "hook" && <TeamMembersHooked />}
      {/*{view === 'context' && <AuthContextExample />} */}
    </div>
  );
}

export default App;
