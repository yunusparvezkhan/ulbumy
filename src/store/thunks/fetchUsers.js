import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchUsers = createAsyncThunk('users/fetch', async () => {
    const res = await axios.get("http://localhost:3010/users")

    // Dev Only
    await pause(1000);

    return res.data;
});

// Development phase functions
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

export { fetchUsers }