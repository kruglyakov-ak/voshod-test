"use client";

import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/shared/ui/card";
import { carApi } from "@/entities/car/api";
import { Spinner } from "@/shared/ui/spinner";
import { Button } from "@/shared/ui/button";
import { useRouter } from "next/navigation";

export function CarPage({ id }: { id: string }) {
  const { data, isLoading, isFetching } = carApi.useGetCarQuery({ id });
  const router = useRouter()

  return (
    <div className="w-[100vw] h-[100vh] p-5 flex justify-center items-center">
      {isLoading && isFetching ? (
          <Spinner size={"large"}
                   className="scale-10" />
        )
        :
        (<>

          <Card className={'min-h-[500px] min-w-[500px]'}>
            <Button onClick={router.back}>Назад</Button>
            <CardHeader>
              <CardTitle className="w-max ">
                {data?.item.brand} {data?.item.model}
              </CardTitle>
              <CardDescription>
                <>Цена: {data?.item.price}</>
                <br />
                {!!data?.item.tarif.length && <>Тариф: {data?.item.tarif.join(", ")}</>}
              </CardDescription>
            </CardHeader>
          </Card>
          </>
        )}
    </div>
  )
    ;
}
