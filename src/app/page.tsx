"use client";

import { carsApi } from "@/entities/cars-list/api";

export default function Home() {
  const { data } = carsApi.useGetCarsQuery({
    brands: [],
    models: [],
    tarifs: [],
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.list.map(({ brand, model, number, id, price, image }) => (
        <div key={id}>
          <p>{brand}</p>
          <p>{model}</p>
          <p>{number}</p>
          <p>{price}</p>
          {image && <img src={image} alt={`${brand} ${model}`} />}
        </div>
      ))}
    </main>
  );
}
