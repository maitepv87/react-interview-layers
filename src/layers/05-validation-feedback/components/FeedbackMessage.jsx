import { useValidation } from "../context/useValidation";

function FeedbackMessage({ field }) {
  const { state } = useValidation();
  const message = state.errors[field];

  if (!message) return null;

  return (
    <p id={`${field}-error`} role="alert" style={{ color: "red" }}>
      {message}
    </p>
  );
}

export default FeedbackMessage;
