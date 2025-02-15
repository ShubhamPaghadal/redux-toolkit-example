import { createApi } from "@reduxjs/toolkit/query";

const userapi = createApi({
  baseQuery: fethBasequery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllusers: builder.query({
      query: () => "users",
    }),
  }),
});
