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
            await pause(0);
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
                            id: album.id,
                        }
                    ]
                },
                query: (album) => {
                    return {
                        url: './images',
                        params: {
                            albumId: album.id,
                            userId: album.userId
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
                            userId: album.userId,
                            src: faker.image.urlPicsumPhotos(),
                        }
                    }
                }
            }),
            delteImage: builder.mutation({
                invalidatesTags(result, error, image) {
                    return [
                        {
                            tag: 'image',
                            id: image.albumId
                        }
                    ]
                },
                query: (image) => {
                    return {
                        url: `/images/${image.id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
})


export const { useFetchImagesQuery, useCreateImageMutation, useDelteImageMutation } = imagesApi;
export { imagesApi };