import { BASE_URL, ENDPOINTS } from "@/shared/api/endpoints";
import { IApiResponse, ICarsListItem } from "@/shared/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsList = createApi({
  reducerPath: "carsList",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getCarsList: builder.query<IApiResponse<"list", ICarsListItem[]>, any>({
      query: ({ brands, models }: { brands: string[]; models: string[] }) =>
        ENDPOINTS.GET_CARS({ brands, models }),
    }),
  }),
});

export const { useGetCarsListQuery } = carsList;
