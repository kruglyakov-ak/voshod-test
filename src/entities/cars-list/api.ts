import { baseApi } from "@/shared/api";
import { endpoints } from "@/shared/endpoints";
import { IApiResponse, ICarsListItem } from "@/shared/types";
import { z } from "zod";

const CarsListDtoSchema = z.object({
  result: z.number().optional(),
  page: z.coerce.number().optional(),
  pages: z.number().optional(),
  per_page: z.number().optional(),
  list: z.array(
    z.object({
      id: z.number(),
      brand: z.string(),
      model: z.string(),
      number: z.string(),
      price: z.number(),
      image: z.string().nullable(),
      tarif: z.array(z.string()),
    }),
  ),
});

export const carsApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getCars: create.query<
      IApiResponse<"list", ICarsListItem[]>,
      { brands: string[]; models: string[]; tarifs: string[], page: number }
    >({
      query: ({ brands, models, tarifs, page }) =>
        endpoints.getCars({ brands, models, tarifs, page }),
      transformResponse: (res: unknown) => CarsListDtoSchema.parse(res),
    }),
  }),
  overrideExisting: true,
});


