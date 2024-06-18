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
   {
    console.log(tarifs[0], encodeURIComponent(tarifs[0]))
    return `?w=catalog-cars${brands.length ? brands.map((brand) => `&brand=${encodeURIComponent(brand)}`).join("") : ""}${models.length ? models.map((model) => `&model=${encodeURIComponent(model)}`).join("") : ""}${tarifs.length ? tarifs.map((tarif) => `&tarif=${encodeURIComponent(tarif)}`).join("") : ""}`},
  getCarsById: (id: string) => `?w=catalog-car&id=${id}`,
};
