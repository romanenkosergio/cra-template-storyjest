import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

import {IUser} from 'types';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_BASE_URL}),
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => `/users`,
        }),
        getUserById: builder.query<IUser, number>({
            query: (id: number) => `/users/${id}`,
        }),
    }),
});

export const {useGetAllUsersQuery, useGetUserByIdQuery} = usersApi;