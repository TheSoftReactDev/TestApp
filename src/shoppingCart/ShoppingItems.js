import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { receiveCart, clickNumber } from "./shoppingCartAction";
import { createSelector } from "reselect";
const getClickedNumber = createSelector(
  (state) => state.shoppingCartStore,
  (shoppingCartStore) => shoppingCartStore
);
const ShoppingItems = () => {
  const dispatch = useDispatch();
  const { clickedNumber } = useSelector(getClickedNumber);
  const buttonClicked = () => {
    dispatch(clickNumber(clickedNumber + 1));
    console.log(clickedNumber);
  };
  return (
    <div>
      {" "}
      Hello
      <button onClick={buttonClicked}> Buy </button>
    </div>
  );
};

export default ShoppingItems;
