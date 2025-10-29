import { useState } from "react";
import TeamMembersBasic from "./layers/01-basic-fetch/TeamMembersBasic";
import TeamMembersHooked from "./layers/02-custom-hook/TeamMembersHooked";

import { TeamMembersProvider } from "./layers/03-context-integration/context/useTeamMembersContext";
import TeamMembersWithContext from "./layers/03-context-integration/TeamMembersWithContext";

import { AuthProvider } from "./layers/04-auth-simulation/context/AuthProvider";
import LoginPanel from "./layers/04-auth-simulation/components/LoginPanel";
import TeamMembersProtected from "./layers/04-auth-simulation/components/TeamMembersProtected";

import { ValidationProvider } from "./layers/05-validation-feedback/context/ValidationProvider";
import ContactForm from "./layers/05-validation-feedback/components/ContactForm";

import ExtensionsShowcase from "./layers/06-extensions/ExtensionsShowcase";

function App() {
  const [view, setView] = useState("basic");

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React Scenarios Layers</h1>

      <nav style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <button onClick={() => setView("basic")}>01 – Basic Fetch</button>
        <button onClick={() => setView("hook")}>02 – Custom Hook</button>
        <button onClick={() => setView("context")}>03 – Context</button>
        <button onClick={() => setView("auth")}>04 – Auth</button>
        <button onClick={() => setView("validation")}>
          05 – Validation Feedback
        </button>
        <button onClick={() => setView("extensions")}>06 – Extensions</button>
      </nav>

      {view === "basic" && <TeamMembersBasic />}
      {view === "hook" && <TeamMembersHooked />}
      {view === "context" && (
        <TeamMembersProvider>
          <TeamMembersWithContext />
        </TeamMembersProvider>
      )}
      {view === "auth" && (
        <AuthProvider>
          <LoginPanel />
          <TeamMembersProtected />
        </AuthProvider>
      )}
      {view === "validation" && (
        <ValidationProvider>
          <ContactForm />
        </ValidationProvider>
      )}
      {view === "extensions" && <ExtensionsShowcase />}
    </div>
  );
}

export default App;
