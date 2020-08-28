export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";
export const CLICK_NUMBER = "CLICK_NUMBER";
export const SELECTED_ITEMS = "CLICK_NUMBER";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

const initialState = {
  cartItems: [],
  isloading: true,
  selectedItems: [],
  clickedNumber: false,
};

export const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        selectedItems: action.selectedItems,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        selectedItems: state.selectedItems.map((product) =>
          product.id === action.id
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        selectedItems: state.cartItems.map((product) =>
          product.id === action.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        selectedItems: state.cartItems.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };
    case EMPTY_CART:
      return {
        ...state,
        selectedItems: state.cartItems.map((product) =>
          product.selected
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };

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
