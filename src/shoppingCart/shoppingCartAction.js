import axios from "axios";
export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";
export const CLICK_NUMBER = "CLICK_NUMBER";
export const SELECTED_ITEMS = "CLICK_NUMBER";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const SUB_QUANTITY = "SUB_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

export const addToCart = (selectedItems) => ({
  type: ADD_TO_CART,
  selectedItems,
});

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    id,
  };
};
export const subtractQuantity = (id) => {
  return {
    type: SUB_QUANTITY,
    id,
  };
};
export const addQuantity = (id) => {
  return {
    type: ADD_QUANTITY,
    id,
  };
};
export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};

export const checkIsLoading = () => ({
  type: REQUEST_CART,
});

export const requestCart = () => {
  return (dispatch) => {
    dispatch(checkIsLoading);
    axios
      .get("http://13.127.243.60/api/product/getAllGroceryStaple")
      .then((response) => {
        const cartItems = response.data.data.products;
        dispatch(receiveCart(cartItems));
      })
      .catch((error) => {
        const errorMsg = error.message;
        console.log(errorMsg);
      });
  };
};
export const receiveCart = (cartItems) => ({
  type: RECEIVE_CART,
  cartItems,
});

export const clickNumber = (clickedNumber) => ({
  type: CLICK_NUMBER,
  clickedNumber,
});
