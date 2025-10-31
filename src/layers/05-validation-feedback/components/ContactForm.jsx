import { useState } from "react";
import { useValidation } from "../context/useValidation";
import { setError, clearError } from "../context/validationActions";
import FeedbackMessage from "./FeedbackMessage";

function ContactForm() {
  const [email, setEmail] = useState("");
  const { state, dispatch } = useValidation();

  const validateEmail = (value) => {
    if (!value) {
      dispatch(setError("email", "Email is required"));
    } else if (!value.includes("@")) {
      dispatch(setError("email", "Email must include '@'"));
    } else {
      dispatch(clearError("email"));
    }
  };

  const handleBlur = () => validateEmail(email);

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (state.errors.email) validateEmail(e.target.value);
  };

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
        aria-invalid={!!state.errors.email}
        aria-describedby="email-error"
      />
      <FeedbackMessage field="email" />
    </form>
  );
}

export default ContactForm;

import { useState } from "react";
