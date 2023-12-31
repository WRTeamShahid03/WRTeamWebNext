import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import apiMiddleware from '../middleware/api'; // Import your custom API middleware

const persistConfig = {
  key: 'wrteam',
  storage,
};

const rootReducer = combineReducers({
  // Add your reducers here
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiMiddleware, // Add your custom middleware here
  ],
});

export const persistor = persistStore(store);
