import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      // Assumption: action.payload is a string
      // action.payload === 'something'
      state.searchTerm = action.payload;
    },

    addCar(state, action) {
      // Assumption: action.payload is a car object
      // action.payload = { name = 'abc', cost = 123 }
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },

    removeCar(state, action) {
      // Assumption: action.payload is id of car to be removed
      // action.payload == 1234123
      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = updated;
    },
  },
});

export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
