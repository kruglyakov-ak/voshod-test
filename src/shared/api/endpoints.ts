export const BASE_URL = "https://test.taxivoshod.ru/api/test/";

export const ENDPOINTS = {
  GET_FILTERS: "?w=catalog-filter",
  GET_CARS: ({ brands, models }: { brands: string[]; models: string[] }) =>
    `?w=catalog-cars${brands.length ? brands.map((brand) => `&brand=${brand}`).join("") : ""}${models.length ? models.map((model) => `&model=${model}`).join("") : ""}`,
  GET_CAR_BY_ID: (id: string) => `?w=catalog-car&id=${id}`,
};
