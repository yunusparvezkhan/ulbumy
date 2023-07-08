import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
import { addUser } from "../thunks/addUser";
import { deleteUser } from "../thunks/deleteUser";

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

        // Reducer for deleteUser Thunk
        builder.addCase(deleteUser.fulfilled, (state, action) => {
            // Update data array with new dataset withdrawing the intended user to be deleted
        })
    }
})

export const usersReducer = usersSlice.reducer;