import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// Development phase functions
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

const imagesApi = createApi({
    reducerPath: 'images',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3010',

        // Dev Only
        fetchFn: async (...args) => {
            await pause(300);
            return fetch(...args);
        }
    }),
    endpoints(builder) {
        return {
            fetchImages: builder.query({
                query: (album) => {
                    return {
                        url: './images',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET',
                    }
                }
            })
        }
    }
})


export const { useFetchImagesQuery } = imagesApi;
export { imagesApi };