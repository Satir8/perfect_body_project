export const types = {
  GET_INFO: "GET_INFO",
  GET_DANGER_PRODUCTS: "GET_DANGER_PRODUCTS"
};

export const getTotalCalories = calories => ({
  type: types.GET_INFO,
  payload: { calories }
});

export const getDangerProducts = products => ({
  type: types.GET_DANGER_PRODUCTS,
  payload: products
});
