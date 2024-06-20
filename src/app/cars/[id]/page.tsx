import { CarPage } from "@/entities/car/components/car-page";

export async function generateStaticParams() {
  return [{ id: "fallback" }];
}

export default function Car() {
  return <CarPage  />;
}
