import { CarPage } from "@/entities/car/components/car-page";

export default function Car({ params }: { params: { id: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <CarPage id={params.id} />
    </main>
  );
}
