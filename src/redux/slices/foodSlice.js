import { createSlice } from "@reduxjs/toolkit";

const foodItems =await fetch(
  "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
).then((res) => res.json());


export const foodSlice = createSlice({
  name: "food",
  initialState: {
    foods: foodItems.Items,
  },
  reducers: {
    addFood: (state, action) => {
      state.foods.push(action.payload);
    },
  },
});

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;
