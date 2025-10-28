import { ACTION_TYPES } from "./actionTypes";

export const initialState = {
  user: null,
  isAuthenticated: false,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        user: action.payload,
        isAuthenticated: true,
      };
    case ACTION_TYPES.LOGOUT:
      return {
        user: null,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
