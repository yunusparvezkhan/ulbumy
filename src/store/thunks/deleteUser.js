import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteUser = createAsyncThunk('users/remove', async (user) => {
    await axios.delete(`http://localhost:3010/users/${user.id}`);
    return user;
});

