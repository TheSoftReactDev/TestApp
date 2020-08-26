export const REQUEST_CART = "REQUEST_CART";
export const RECEIVE_CART = "RECEIVE_CART";
export const CLICK_NUMBER = "CLICK_NUMBER";

export const receiveCart = () => {
  return {
    type: RECEIVE_CART,
  };
};

export const clickNumber = (clickedNumber) => ({
  type: CLICK_NUMBER,
  clickedNumber,
});
