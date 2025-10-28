import { useEffect, useReducer } from "react";
import { ACTION_TYPES } from "./actionTypes";

// Initial state for async operations: loading, error, and data",
const initialState = {
  members: [],
  isLoading: false,
  error: null,
};

// Reducer to handle async lifecycle: start, success, error, reset",
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.FETCH_STARTED:
      return { ...state, isLoading: true, error: null };

    case ACTION_TYPES.FETCH_SUCCEEDED:
      return { ...state, isLoading: false, members: action.payload };

    case ACTION_TYPES.FETCH_FAILED:
      return { ...state, isLoading: false, error: action.payload };

    case ACTION_TYPES.RESET_STATE:
      return initialState;

    default:
      return state;
  }
};

// Custom hook to manage async state transitions",
export const useTeamMembersReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      dispatch({ type: ACTION_TYPES.FETCH_STARTED });

      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
          throw new Error("Failed to load team members");
        }

        const data = await response.json();
        dispatch({ type: ACTION_TYPES.FETCH_SUCCEEDED, payload: data });
      } catch (error) {
        dispatch({
          type: ACTION_TYPES.FETCH_FAILED,
          payload: error.message || "Unexpected error fetching data",
        });
      }
    };

    fetchTeamMembers();
  }, []);

  return { state, dispatch };
};
