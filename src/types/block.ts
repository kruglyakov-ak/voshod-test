import { Field } from "./field";

export type Block = {
  id: string;
  name: string;
  fields: Field[];
};
