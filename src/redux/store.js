import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from './auth/authReducer'

const persistConfig = {
  key: "root",
  storage,
};

const middleWares = [thunk];

const basicReducer = (state = {}, actions) => state;

const rootReducer = combineReducers({
  reducer: basicReducer,
  session: authReducer
});
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);

// import { composeWithDevTools } from "redux-devtools-extension";
// import { applyMiddleware, createStore, combineReducers } from "redux";
// import thunk from "redux-thunk";

// const middlewares = [thunk];
// const rootReducer = combineReducers({});

// const enhancer =
//   process.env.NODE_ENV === "development"
//     ? composeWithDevTools(applyMiddleware(...middlewares))
//     : applyMiddleware(...middlewares);

// const store = createStore(rootReducer, composeWithDevTools(enhancer));

// export default store;
