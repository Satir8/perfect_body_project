import { types } from "./calcFormActions";
import { combineReducers } from "redux";

export const caloriesReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.GET_INFO:
      return payload.calories;

    default:
      return state;
  }
};

export const currentDangerProducts = (state = {}, { type, payload }) => {
  switch (type) {
    case types.GET_DANGER_PRODUCTS:
      return payload;

    default:
      return state;
  }
};

export const calcFormReducer = combineReducers({
  calories: caloriesReducer,
  dangerProducts: currentDangerProducts
});
