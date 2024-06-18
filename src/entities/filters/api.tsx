import { baseApi } from "@/shared/api";
import { endpoints } from "@/shared/endpoints";
import {
  IApiResponse,
  IBrandFilters,
  IModelFilters,
  ITarifFilters,
} from "@/shared/types";
import { z } from "zod";

const FiltersDtoSchema = z.object({
  result: z.number().optional(),
  brands: z.object({
    name: z.string(),
    code: z.string(),
    values: z.array(z.string()),
  }),
  models: z.object({
    name: z.string(),
    type: z.string(),
    values: z.array(
      z.object({
        brand: z.string(),
        models: z.array(z.string()),
      }),
    ),
  }),
  tarif: z.object({
    name: z.string(),
    type: z.string(),
    values: z.record(z.string(), z.string()),
  }),
});

export const filtersApi = baseApi.injectEndpoints({
  endpoints: (create) => ({
    getFilters: create.query<
      IApiResponse<{
        brands: IBrandFilters;
        models: IModelFilters;
        tarif: ITarifFilters;
      }>,
      void
    >({
      query: () => endpoints.getFilters,
      transformResponse: (res: unknown) => FiltersDtoSchema.parse(res),
    }),
  }),
  overrideExisting: true,
});
