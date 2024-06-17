export type IApiResponse<T extends string, U> = {
  result?: number;
  page?: number;
  pages?: number;
  per_page?: number;
} & {
  [key in T]: U;
};

export interface ICarsListItem {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  image: string;
  tarif: string[];
}
