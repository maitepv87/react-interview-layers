import { ACTION_TYPES } from "./actionTypes";

export const setError = (field, message) => ({
  type: ACTION_TYPES.SET_ERROR,
  payload: { field, message },
});

export const clearError = (field) => ({
  type: ACTION_TYPES.CLEAR_ERROR,
  payload: { field },
});
