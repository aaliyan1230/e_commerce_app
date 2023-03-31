import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    // Fill in your own server starting URL here
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints: (build) => ({
    getProducts: build.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetProductsQuery } = api;
