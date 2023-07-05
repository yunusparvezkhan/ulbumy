import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
    },
    extraReducers(builder) {
        // Reducers for fetchUser Thunk
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
        });

        // Reducers for addUser Thunk
        builder.addCase(addUser.fulfilled, (state, action) => {
            state.data.push(action.payload);
        });
    }
})

export const usersReducer = usersSlice.reducer;