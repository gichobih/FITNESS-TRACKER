import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./reducers/userSlice";

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Combine all reducers (only 'user' reducer in this case)
const rootReducer = combineReducers({
  user: userReducer,
});

// Create a persisted reducer using the persist configuration
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create and configure the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore specific redux-persist actions during serializable check
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);