"use client";

import { useGetCarsListQuery } from "@/entities/cars-list/service";

export default function Home() {
  const { data } = useGetCarsListQuery({ brands: [], models: [] });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.list.map(({ brand, model, number, id, price, image }) => (
        <div key={id}>
          <p>{brand}</p>
          <p>{model}</p>
          <p>{number}</p>
          <p>{price}</p>
          <img src={image} alt={`${brand} ${model}`} />
        </div>
      ))}
    </main>
  );
}
