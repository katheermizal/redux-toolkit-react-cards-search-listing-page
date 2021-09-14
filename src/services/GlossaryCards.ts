import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
  reducerPath: "cards",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getCards: builder.query({
      query: (keyword) => `glossary?search=${keyword}`,
    }),
  }),
});

export const { useGetCardsQuery } = cardsApi;