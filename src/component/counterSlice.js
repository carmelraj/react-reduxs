import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'count',
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        divideby2: (state) => {
            state.value /= 2;
        },
        multipleby2: (state) => {
            state.value *= 2;
        },        
    },
});

export const { increment, decrement,divideby2,multipleby2 } = counterSlice.actions;
export default counterSlice.reducer;
