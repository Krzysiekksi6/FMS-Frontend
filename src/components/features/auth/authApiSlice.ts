import { apiSlice } from "src/api/apiSlice";
import { HTTP_METHODS } from "src/enum/httpMethods";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: import.meta.env.VITE_LOGIN_URL || "/auth",
        method: HTTP_METHODS.POST,
        body: { ...credentials },
      }),
    }),
   
  }),
});

export const { useLoginMutation } = authApiSlice;
