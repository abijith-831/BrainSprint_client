import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import authReducer from './slices/authSlice';
import problemReducer from './slices/problemSlice'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  problems:problemReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth','problems'], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
