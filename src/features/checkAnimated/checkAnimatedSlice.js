import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialState={
    hasAnimated:false
};

//Slice
const checkAnimated= createSlice({
    name:'checkAnimated',
    initialState,
    reducers:{
        isAnimated:(state)=>{
            state.hasAnimated=true;
        }
    }
})

export const{isAnimated}= checkAnimated.actions;
export default checkAnimated.reducer;