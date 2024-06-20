import { CarPage } from "@/entities/car/components/car-page";
import { CarsListDtoSchema } from "@/entities/cars/api";
import { z } from "zod";

export async function generateStaticParams() {
  const res = await fetch(
    "https://test.taxivoshod.ru/api/test/?w=catalog-cars",
  );
  const cars: z.infer<typeof CarsListDtoSchema> = await res.json();
  CarsListDtoSchema.parse(cars);

  const ids: string[] = cars.list.map((car) => String(car.id));

  for (let i = 2; i <= (cars.pages || 1); i++) {
    const r = await fetch(
      `https://test.taxivoshod.ru/api/test/?w=catalog-cars&page=${i}`,
    );
    const c: z.infer<typeof CarsListDtoSchema> = await r.json();
    CarsListDtoSchema.parse(c);
    ids.push(...c.list.map((car) => String(car.id)));
  }

  return ids.map((id) => ({
    id,
  }));
}

export default function Car() {
  return <CarPage />;
}
