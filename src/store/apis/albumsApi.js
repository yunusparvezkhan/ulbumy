import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

// Development phase functions
const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

const albumsApi = createApi({
    reducerPath: 'albums',
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
            fetchAlbums: builder.query({
                providesTags(result, error, user) {
                    return [{
                        type: 'album',
                        id: user.id
                    }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        params: {
                            userId: user.id,
                        },
                        method: 'GET',
                    }
                }
            }),
            createAlbum: builder.mutation({
                invalidatesTags(result, error, user) {
                    return [{
                        type: 'album',
                        id: user.id
                    }];
                },
                query: (user) => {
                    return {
                        url: '/albums',
                        method: 'POST',
                        body: {
                            userId: user.id,
                            name: faker.hacker.verb()
                        }
                    };
                }
            }),
            removeAlbum: builder.mutation({
                invalidatesTags(result, error, album) {
                    return [{
                        type: 'album',
                        id: album.userId
                    }];
                },
                query: (album) => {
                    return {
                        url: `./albums/${album.id}`,
                        method: 'DELETE'
                    }
                }
            })
        }
    }
})


export const { useFetchAlbumsQuery, useCreateAlbumMutation, useRemoveAlbumMutation } = albumsApi;
export { albumsApi };