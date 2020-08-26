import { createStore, combineReducers } from "redux";

import { shoppingCartReducer } from "./shoppingCartReducer";

export default function configureStore(preloadedState) {
  const rootReducer = combineReducers({
    shoppingCartStore: shoppingCartReducer,
  });

  const store = createStore(rootReducer, preloadedState);

  return store;
}
