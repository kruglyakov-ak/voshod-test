import { CarsList } from "@/entities/cars/components/cars-list";
import { Filters } from "@/entities/filters/components/filters";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <Filters />
      <CarsList />
    </main>
  );
}
