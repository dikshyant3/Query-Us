import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./questionsSlice"
export default configureStore({
    reducer:{
        questions: questionReducer,
    }
})