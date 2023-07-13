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
                providesTags(result, error, album) {
                    return [
                        {
                            tag: 'image',
                            id: album.id
                        }
                    ]
                },
                query: (album) => {
                    return {
                        url: './images',
                        params: {
                            albumId: album.id
                        },
                        method: 'GET',
                    }
                }
            }),
            createImage: builder.mutation({
                invalidatesTags(result, error, album) {
                    return [
                        {
                            tag: 'image',
                            id: album.id
                        }
                    ]
                },
                query: (album) => {
                    return {
                        url: '/images',
                        method: 'POST',
                        body: {
                            albumId: album.id,
                            src: faker.image.urlPicsumPhotos(),
                            // Adding this due to no other options
                            alt: faker.vehicle.bicycle(),
                        }
                    }
                }
            })
        }
    }
})


export const { useFetchImagesQuery, useCreateImageMutation } = imagesApi;
export { imagesApi };