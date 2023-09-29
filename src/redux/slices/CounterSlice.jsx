import { createSlice } from "@reduxjs/toolkit";

export const initialState  = {
    value: 0,
}
const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
         incerement: (state) =>{
            state.value += 1;
         },
         decrement: (state) =>{
            state.value -= 1;
         }
    }

})

export const {incerement , decrement} = CounterSlice.actions;
export default CounterSlice.reducer;