import { types } from "./calcFormActions";
import { combineReducers } from "redux";
import moment from 'moment';

export const caloriesReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.GET_INFO:
      return payload.calories;

    default:
      return state;
  }
};

export const currentDangerProducts = (state = null, { type, payload }) => {
  switch (type) {
    case types.GET_DANGER_PRODUCTS:
      return payload;

    default:
      return state;
  }
};

export const dateReducer = (state = moment().format(), { type, payload }) => {
  switch (type) {
    case types.GET_DATE:
      return payload.date;

    default:
      return state;
  }
}

export const calcFormReducer = combineReducers({
  date: dateReducer,
  calories: caloriesReducer,
  dangerProducts: currentDangerProducts
});
