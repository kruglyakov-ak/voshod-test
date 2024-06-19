export const baseUrl = "https://test.taxivoshod.ru/api/test/";

export const endpoints = {
  getFilters: "?w=catalog-filter",
  getCars: ({
    brands,
    models,
    tarifs,
    page
  }: {
    brands: string[];
    models: string[];
    tarifs: string[];
    page: number;
  }) =>
    `?w=catalog-cars${brands.length ? brands.map((brand) => `&brand[]=${brand}`).join("") : ""}${models.length ? models.map((model) => `&model[]=${model}`).join("") : ""}${tarifs.length ? tarifs.map((tarif) => `&tarif[]=${tarif}`).join("") : ""}&page=${page}`,
  getCarsById: (id: string) => `?w=catalog-car&id=${id}`,
};
