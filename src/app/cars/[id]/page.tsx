import { CarPage } from "@/entities/car/components/car-page";

export const getStaticPaths = async () => {
  return { paths: [], fallback: true };
};

export default function Car() {
  return <CarPage  />;
}
