import { Block } from "./types/block";

export const BLOCKS: Block[] = [
  {
    id: "block1",
    name: "Блок 1",
    fields: [
      { title: "Имя", id: "fname" },
      { title: "Фамилия", id: "lname" },
    ],
  },
  {
    id: "block2",
    name: "Блок 2",
    fields: [
      { title: "Дата рождения", id: "bday" },
      { title: "Рост", id: "height" },
    ],
  },
  {
    id: "block3",
    name: "Блок 3",
    fields: [
      { id: "city", title: "Город" },
      { id: "street", title: "Улица" },
      { id: "postcode", title: "Почтовый индекс" },
    ],
  },
];
