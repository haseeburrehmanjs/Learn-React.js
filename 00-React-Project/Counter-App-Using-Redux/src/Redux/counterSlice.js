import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}

const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers : {
        add : (state) => {
            state.value += 1
        },
        less : (state) => {
            state.value -= 1
        },
        ubdate : ((state) => {
            let ubdate = prompt('enter number')
            state.value = ubdate
        })
    }
})

export const {add, less, ubdate} = counterSlice.actions
export default counterSlice.reducer