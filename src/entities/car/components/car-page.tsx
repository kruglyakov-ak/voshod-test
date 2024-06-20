"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { carApi } from "@/entities/car/api";
import { Spinner } from "@/shared/ui/spinner";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/shared/ui/carousel";
import Image from "next/image";

export function CarPage({ id }: { id: string }) {
  const { data, isLoading, isFetching } = carApi.useGetCarQuery({ id });
  const router = useRouter();

  return (
    <div className="w-[100vw] h-[100vh] p-5 flex justify-center items-center">
      {isLoading && isFetching ? (
        <Spinner size={"large"} className="scale-10" />
      ) : (
        <>
          <Card className={"min-h-max min-w-[500px] p-5"}>
            <Button onClick={router.back}>Назад</Button>
            <CardHeader className="px-0">
              <CardTitle className="w-max ">
                {data?.item.brand} {data?.item.model}
              </CardTitle>
              <CardDescription>
                <>Цена: {data?.item.price}</>
                <br />
                {!!data?.item.tarif.length && (
                  <>Тариф: {data?.item.tarif.join(", ")}</>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-0 w-full flex items-center justify-center">
              {data?.item?.images ? (
                <Carousel
                  className="w-full max-w-sm"
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent className="-ml-1">
                    {data?.item?.images.map(({ image, id }) => (
                      <CarouselItem
                        key={id}
                        className="pl-1 md:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6 relative">
                              <Image
                                src={image}
                                alt={`${data?.item.brand + data?.item.model}`}
                                fill
                                loader={() => image}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <p>Нет изображений</p>
              )}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}
