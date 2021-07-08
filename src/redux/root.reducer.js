import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import auth from "./auth/auth.reducer";
import contactsReducer from "./contacts/contacts.reducer";

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const persistAuthReducer = persistReducer(persistConfig, auth);

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: persistAuthReducer,
});

export default rootReducer;
