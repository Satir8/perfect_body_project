import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { calcFormReducer } from "./calcForm/calcFormReducer";

const persistConfig = {
  key: "root",
  storage
};

const middleWares = [thunk];

const rootReducer = combineReducers({
  calcForm: calcFormReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);
export const persistor = persistStore(store);
