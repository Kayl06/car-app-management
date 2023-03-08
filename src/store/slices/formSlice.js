import { createSlice } from "@reduxjs/toolkit";
import { addCar } from "./carsSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, payload) => {
      state.name = '';
      state.cost = 0;
    });
  },
});

export const { changeCost, changeName } = formSlice.actions; // action creators are generated for each case reducer function
export const formReducer = formSlice.reducer; // combined reducers
