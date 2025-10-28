# 05 – Validation Feedback

This scenario introduces emotionally intelligent form validation using `React Context` and `useReducer`. It separates the form, feedback messages, validation logic, and context for clarity and modularity. The goal is to simulate real-time validation with editorial feedback that adapts to user input.

## Techniques Used

- `onBlur` and `onChange` for real-time validation
- `useReducer` to manage validation state and transitions
- `createContext` and `useContext` to share validation state
- Custom hook (`useValidation`) for safe and modular consumption
- Action file (`validationActions.js`) for editorial clarity
- Action types (`actionTypes.js`) for consistency and scalability
- Accessible feedback using `aria-*` and `role="alert"`

## Folder Structure

05-validation-feedback/
├── components/
│ ├── ContactForm.jsx
│ ├── FeedbackMessage.jsx
├── context/
│ ├── ValidationContext.js
│ ├── ValidationProvider.jsx
│ ├── useValidation.js
│ ├── validationActions.js
│ ├── actionTypes.js
├── README.md

## Next Step

Extend validation to support async checks (e.g. email availability), integrate with `AuthContext` for conditional rules, or simulate multi-step forms with progressive feedback.
