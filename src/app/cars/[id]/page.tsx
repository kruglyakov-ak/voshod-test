import { CarPage } from "@/entities/car/components/car-page";
import { CarsListDtoSchema } from "@/entities/cars/api";
import { z } from "zod";

export async function generateStaticParams() {
  const res = await fetch(
    "https://test.taxivoshod.ru/api/test/?w=catalog-cars",
  );
  const cars: z.infer<typeof CarsListDtoSchema> = await res.json();
  CarsListDtoSchema.parse(cars);

  new Array(cars.pages || 1 - 1).forEach(async (_, index) => {
    const r = await fetch(
      `https://test.taxivoshod.ru/api/test/?w=catalog-cars&page=${index + 1}`,
    );
    const c: z.infer<typeof CarsListDtoSchema> = await r.json();
    CarsListDtoSchema.parse(c);

    cars.list.push(...c.list);
  });

  return cars.list.map((car) => ({
    id: String(car.id),
  }));
}

export default function Car() {
  return <CarPage />;
}
