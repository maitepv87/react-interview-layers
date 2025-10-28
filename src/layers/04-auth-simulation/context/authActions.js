import { ACTION_TYPES } from "./actionTypes";

export const loginAction = (user) => ({
  type: ACTION_TYPES.LOGIN,
  payload: user,
});

export const logoutAction = () => ({
  type: ACTION_TYPES.LOGOUT,
});
