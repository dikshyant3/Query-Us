import { createSlice } from "@reduxjs/toolkit";

export const questionSlice = createSlice({
    name: "questions",
    initialState:{
        currentPage:0,
        list:[]
    },
    reducers:{
        updateList: (state,action)=>{
            state.list =  action.payload;
            console.log("Payload for Redux",state.list)

        },
        updateCurrentPage:(state,action)=>{
            state.currentPage = action.payload;
        }
    }
})

export const {updateList, updateCurrentPage} = questionSlice.actions;
export default questionSlice.reducer;