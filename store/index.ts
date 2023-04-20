import { configureStore } from "@reduxjs/toolkit";
import tripSlice from "./slice/tripSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    trip: tripSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
