import { useReducer } from "react";
import { ValidationContext } from "./ValidationContext";
import { validationReducer, initialState } from "./validationReducer";

export const ValidationProvider = ({ children }) => {
  const [state, dispatch] = useReducer(validationReducer, initialState);

  return (
    <ValidationContext.Provider value={{ state, dispatch }}>
      {children}
    </ValidationContext.Provider>
  );
};
