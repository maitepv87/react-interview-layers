import { useContext } from "react";
import { ValidationContext } from "./ValidationContext";

export const useValidation = () => {
  const context = useContext(ValidationContext);
  if (!context)
    throw new Error("useValidation must be used within <ValidationProvider>");
  return context;
};
