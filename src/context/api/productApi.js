import { api } from "./api";

export const productApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Dummyjson GET Products
    getProducts: build.query({
      query: () => ({
        url: "/products",
      }),
      providesTags: ["products-mui"],
    }),
  }),
});

export const { useGetProductsQuery } = productApi;
