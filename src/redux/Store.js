import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';

import RootReducer from './rootReducer/RootReducer.js';

const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persister = persistStore(store);

export {store, persister as persistor};
