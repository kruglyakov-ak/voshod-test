export type IApiResponse<T> = {
  result?: number;
  page?: number;
  pages?: number;
  per_page?: number;
} & T;

export interface ICarsListItem {
  id: number;
  brand: string;
  model: string;
  number: string;
  price: number;
  image: string | null;
  tarif: string[];
}

export interface IBrandFilters {
  name: string;
  code: string;
  values: string[];
}

export interface IModelFilters {
  name: string;
  type: string;
  values: Array<{ brand: string; models: string[] }>;
}

export interface ITarifFilters {
  name: string;
  type: string;
  values: Record<string, string>;
}

export interface ICarImage {
  id: string
  image: string
}

export interface ICar {
  id: number;
  brand: string;
  model: string;
  price: number;
  images: ICarImage[] | null;
  tarif: string[];
}