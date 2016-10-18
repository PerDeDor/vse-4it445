import { combineReducers } from 'redux';

const dummy = (state = 0, action) => {
  console.log('---- action:', action, state);
  switch (action.type) {
    case 'DUMMY_ACTION':
      return state + 1;
  }
  return state;
}


import { SHOPPING_CART_ADD_PRODUCT} from '../actions';

const shoppingCart = (state={}, action) => {
  switch (action.type) {
    case SHOPPING_CART_ADD_PRODUCT:
    const { product } = action;
    const oldCartItem = state[product.id] || { count:0 };
    const newCartItem = {
      product,
      count: 1,
    };
    break;
    return {
      ...state,
      [product.id]: newCartItem,
    };

    default:
  }
  return state;
}

export const rootReducer = combineReducers({
  dummy,
  shoppingCart,
});
