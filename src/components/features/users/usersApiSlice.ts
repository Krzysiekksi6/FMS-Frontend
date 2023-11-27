import { apiSlice } from "src/api/apiSlice";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => import.meta.env.VITE_USERS_URL,
      keepUnusedDataFor: 60,
    }),
  }),
});

export const { useGetUsersQuery } = usersApiSlice;
