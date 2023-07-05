import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const addUser = createAsyncThunk('users/add', async () => {
    const res = await axios.post("http://lcalhost:3010/users", {
        name: faker.person.fullName()
    });
    // Dev Only
    await pause(10000)

    return res.data;
});

// Development phase functions

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

export { addUser };