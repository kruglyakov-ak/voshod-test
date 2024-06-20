import { baseApi } from "@/shared/api";
import { endpoints } from "@/shared/endpoints";
import { IApiResponse, ICar } from "@/shared/types";
import { z } from "zod";

const CarDtoSchema = z.object({
  result: z.number().optional(),
  item:
    z.object({
      id: z.number(),
      brand: z.string(),
      model: z.string(),
      price: z.number(),
      images: z.array(z.object({ id: z.string(), image: z.string() })).nullable(),
      tarif: z.array(z.string())
    })
});

export const carApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getCar: create.query<
      IApiResponse<{ item: ICar }>,
      { id: string }
    >({
      query: ({ id }) =>
        endpoints.getCarsById(id),
      transformResponse: (res: unknown) => CarDtoSchema.parse(res)
    })
  }),
  overrideExisting: true
});
