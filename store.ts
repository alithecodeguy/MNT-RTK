import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import clockReducer from "./lib/slices/clockSlice";
import clockReducer2 from "./lib/slices/clockSlice2";
import counterReducer from "./lib/slices/counterSlice";
import notesReducer from "./lib/slices/notesSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    clock: clockReducer,
    clock2: clockReducer2,
    notes: notesReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
