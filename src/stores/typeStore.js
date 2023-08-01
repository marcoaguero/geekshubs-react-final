import { createSlice, configureStore } from "@reduxjs/toolkit";
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

const persistConfig = {
  key: "root",
  storage,
};

export const typeSlice = createSlice({
  name: "type",
  initialState: {
    value: "movie",
  },
  reducers: {
    selectMovie: (state) => {
      state.value = "movie";
    },
    selectTv: (state) => {
      state.value = "tv";
    },
  },
});

const persistedReducer = persistReducer(persistConfig, typeSlice.reducer);

export const { selectMovie, selectTv } = typeSlice.actions;
export const typeStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(typeStore);
// export const selectType = (state) => typeSlice.state.type.value;
typeStore.subscribe(() => console.log(typeStore.getState()));
