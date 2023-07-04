import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        playlists: [],
        songs: []
    }
})

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';