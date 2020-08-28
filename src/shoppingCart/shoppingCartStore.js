import { createStore, combineReducers, applyMiddleware } from "redux";
import { PortalReducer } from "../PortalRedux/PortalReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";
import thunk from "redux-thunk";
export default function configureStore(preloadedState) {
  const rootReducer = combineReducers({
    shoppingCartStore: shoppingCartReducer,
    PortalReducer: PortalReducer,
  });

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  );

  return store;
}
