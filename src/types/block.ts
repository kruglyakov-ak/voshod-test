import { Field } from "./field";

export type Block = {
  id: number;
  name: string;
  fields: Field[];
};
