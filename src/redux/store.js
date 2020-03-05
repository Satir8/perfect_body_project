import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from './auth/authReducer'

const sessionPersistConfig = {
  key: "session",
  storage,
  whitelist: ['token']
  
};

const middleWares = [thunk];

const basicReducer = (state = {}, actions) => state;

const rootReducer = combineReducers({
  reducer: basicReducer,
  session: persistReducer(sessionPersistConfig, authReducer)
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleWares))
);

export const persistor = persistStore(store);
