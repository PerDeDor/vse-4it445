
export const DUMMY_ACTION = 'DUMMY_ACTION';
export const SHOPPING_CART_ADD_PRODUCT = 'SHOPPING_CART_ADD_PRODUCT';

export const addToCart = product => {
  return {
    type: SHOPPING_CART_ADD_PRODUCT,
    product,
  };
};

export const dummyAction = data => {
  return {
    type: DUMMY_ACTION,
    data,
    hello: 123,
  };
};
