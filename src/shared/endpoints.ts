export const baseUrl = "https://test.taxivoshod.ru/api/test/";

export const endpoints = {
  getFilters: "?w=catalog-filter",
  getCars: ({
    brands,
    models,
    tarifs,
  }: {
    brands: string[];
    models: string[];
    tarifs: string[];
  }) =>
    `?w=catalog-cars${brands.length ? brands.map((brand) => `&brand=${brand}`).join("") : ""}${models.length ? models.map((model) => `&model=${model}`).join("") : ""}${tarifs.length ? tarifs.map((tarif) => `&tarif=${tarif}`).join("") : ""}`,
  getCarsById: (id: string) => `?w=catalog-car&id=${id}`,
};
