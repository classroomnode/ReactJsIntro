import storageSession from "redux-persist/lib/storage/session";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";

//import reduxImmutableStateInvariant from "redux-immutable-state-invariant";

// making the store more persistent by storing in sessionStorage and syncing using
// the plugin when the state is changed in React. This to be able to keep the data
// on for instance page reload and avoid unnecessary api calls.

function configureStore(rootReducer, key, initialState) {
  const persistConfig = {
    key: key || "isellPro",
    storage: storageSession,
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const middlewares = [
    // Add other middleware on this line...

    // thunk middleware can also accept an extra argument to be passed to each thunk action
    // https://github.com/gaearon/redux-thunk#injecting-a-custom-argument
    thunk,
  ];

  let store = createStore(
    persistedReducer,
    initialState,
    compose(
      applyMiddleware(...middlewares),
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? composeWithDevTools()
        : (f) => f
    )
  );
  let persistor = persistStore(store);
  return { store, persistor };
}

export default configureStore;
