"use client";

import Image from "next/image";
import { ScrollArea } from "@/shared/ui/scroll-area";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/shared/ui/pagination";
import React from "react";
import { carsApi } from "../api";
import { Spinner } from "@/shared/ui/spinner";

export function CarsList() {
  const [page, setPage] = React.useState(1);
  const {
    data: cars,
    isLoading,
    isFetching,
  } = carsApi.useGetCarsQuery({
    brands: [],
    models: [],
    tarifs: [],
    page,
  });

  return (
    <>
      <ScrollArea className="h-[80vh] w-full rounded-md border">
        <div className="p-4 flex gap-4 flex-wrap justify-start">
          {isLoading && isFetching ? (
            <div className="w-full h-[80vh] flex justify-center items-center">
              <Spinner size={"large"} className="scale-10" />
            </div>
          ) : (
            cars?.list.map(
              ({ id, brand, model, number, price, image, tarif }) => (
                <Card
                  key={id}
                  className="w-[32%] flex items-center cursor-pointer transition-all hover:border-gray-400 hover:transition-all active:scale-95 active:transition-all "
                >
                  <CardHeader>
                    <CardTitle className="w-max ">
                      {brand} {model}
                    </CardTitle>
                    <CardDescription>
                      <>Номер: {number}</>
                      <br />
                      <>Цена: {price}</>
                      <br />
                      {!!tarif.length && <>Тариф: {tarif.join(", ")}</>}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="w-full h-full min-h-[150px] p-6 flex justify-center">
                    <Image
                      src={image || "https://via.placeholder.com/150"}
                      alt={brand + " " + model}
                      width={150}
                      height={150}
                      priority
                      className="object-contain w-auto h-[150px] static flex justify-center items-center bg-gray-200"
                    />
                  </CardContent>
                </Card>
              ),
            )
          )}
        </div>
      </ScrollArea>

      <Pagination className="mt-4">
        <PaginationContent>
          <PaginationItem className="cursor-pointer">
            <PaginationPrevious onClick={() => page > 1 && setPage(page - 1)} />
          </PaginationItem>

          {cars?.pages &&
            Array.from({ length: cars?.pages }, (_, i) => i + 1).map((i) => (
              <PaginationItem className="cursor-pointer" key={i}>
                <PaginationLink
                  isActive={page === i}
                  onClick={() => setPage(i)}
                >
                  {i}
                </PaginationLink>
              </PaginationItem>
            ))}

          <PaginationItem className="cursor-pointer">
            <PaginationNext
              onClick={() => page < (cars?.pages || 1) && setPage(page + 1)}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
}
