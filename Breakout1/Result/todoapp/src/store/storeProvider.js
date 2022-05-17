import React from "react";
import configureStore from "./configureStore";
import { Provider } from "react-redux";

import rootReducer from "./reducers";

const { store, persistor } = configureStore(rootReducer, "todo-state");
function StoreProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
export { store, persistor };
export default StoreProvider;
