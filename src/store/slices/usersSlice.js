import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        isLoading: false,
        err: null
    },
    reducers: {

    }
})

export const usersReducer = usersSlice.reducer;