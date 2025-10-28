import { ACTION_TYPES } from "./actionTypes";

export const initialState = {
  errors: {},
};

export const validationReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_ERROR:
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.payload.field]: action.payload.message,
        },
      };
    case ACTION_TYPES.CLEAR_ERROR:
      const { [action.payload.field]: _, ...rest } = state.errors;
      return {
        ...state,
        errors: rest,
      };
    default:
      return state;
  }
};
