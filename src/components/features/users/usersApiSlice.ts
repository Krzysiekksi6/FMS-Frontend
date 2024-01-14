import { apiSlice } from "src/api/apiSlice";
import { HTTP_METHODS } from "src/enum/httpMethods";

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => import.meta.env.VITE_USERS_URL,
      keepUnusedDataFor: 60,
    }),
    postUserDetails: builder.mutation({
      query: ({ id, userDetails }) => ({
        url: `/users/${id}/details`,
        method: HTTP_METHODS.PUT,
        body: userDetails,
      }),
    }),
    updateDietId: builder.mutation({
      query: ({ id, dietId }) => ({
        url: `/users/${id}/updateDietId`,
        method: HTTP_METHODS.PUT,
        body: { dietId: dietId }, // Przekazujemy dietId jako część ciała zapytania
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  usePostUserDetailsMutation,
  useUpdateDietIdMutation, // Dodajemy nowe zapytanie do hooka
} = usersApiSlice;
