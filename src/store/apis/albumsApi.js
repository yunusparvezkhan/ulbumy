import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const albumsApi = createApi({
    reducerPath: 'albums',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3010',
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
            })
        }
    }
})


export const { useFetchAlbumsQuery, useCreateAlbumMutation } = albumsApi;
export { albumsApi };