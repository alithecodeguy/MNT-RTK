import { createSlice } from "@reduxjs/toolkit";

const clockSlice2 = createSlice({
  name: "clock2",
  initialState: {
    lastUpdate: 0,
    light: true,
  },
  reducers: {
    tick2: (state, action) => {
      state.lastUpdate = action.payload.lastUpdate;
      state.light = !!action.payload.light;
    },
  },
});

export const selectClock2 = (state) => state.clock2;

export const { tick2 } = clockSlice2.actions;

export default clockSlice2.reducer;
