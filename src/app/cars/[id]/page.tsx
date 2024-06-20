import { CarPage } from "@/entities/car/components/car-page";
import { CarsListDtoSchema } from "@/entities/cars/api";
import { z } from "zod";

export async function generateStaticParams() {
  const res = await fetch('https://test.taxivoshod.ru/api/test/?w=catalog-cars');
  const cars: z.infer<typeof CarsListDtoSchema> = await res.json();
  CarsListDtoSchema.parse(cars)
 
  return cars.list.map((car) => ({
    id: String(car.id),
  }))
}

export default function Car() {
  return <CarPage  />;
}
