import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query'
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from './apis/albumsApi';
import { imagesApi } from "./apis/imagesApi";

const store = configureStore({
    reducer: {
        users: usersReducer,
        [albumsApi.reducerPath]: albumsApi.reducer,
        [imagesApi.reducerPath]: imagesApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat([albumsApi.middleware, imagesApi.middleware])
    }
})

setupListeners(store.dispatch);

export { store };
export * from './thunks/fetchUsers';
export * from './thunks/addUser';
export * from './thunks/deleteUser';
export { useFetchAlbumsQuery, useCreateAlbumMutation, useRemoveAlbumMutation } from './apis/albumsApi';
export { useFetchImagesQuery, useCreateImageMutation, useDelteImageMutation } from './apis/imagesApi';