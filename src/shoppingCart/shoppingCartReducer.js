export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";
export const CLICK_NUMBER = "CLICK_NUMBER";

const initialState = {
  cartItems: [],
  isloading: true,
  clickedNumber: null
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CART:
      return {
        ...state,
        isloading: true,
      };
    case RECEIVE_CART:
      return {
        ...state,
        cartItems: action.cartItems,
        isloading: false,
      };
    case CLICK_NUMBER:
      return {
        ...state,
        clickedNumber: action.clickedNumber,
      };
    default:
      return state;
  }
};
