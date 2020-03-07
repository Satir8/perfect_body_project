export const types = {
  GET_INFO: "GET_INFO",
  GET_DANGER_PRODUCTS: "GET_DANGER_PRODUCTS",
  GET_DATE: "GET_DATE",
};

export const getTotalCalories = calories => ({
  type: types.GET_INFO,
  payload: { calories }
});

export const getDangerProducts = products => ({
  type: types.GET_DANGER_PRODUCTS,
  payload: products
});

export const getDate = date => ({
  type: types.GET_DATE,
  payload: { date }
})
