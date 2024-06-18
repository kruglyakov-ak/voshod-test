import { CarsList } from "@/entities/cars-list/components/cars-list";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-5">
      <CarsList />
    </main>
  );
}
