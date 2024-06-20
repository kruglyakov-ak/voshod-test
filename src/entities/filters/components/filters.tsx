"use client";

import MultipleSelector, {
} from "@/shared/ui/multiple-selector";
import React from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useGetFiltersOptions } from "@/shared/hooks/useGetFiltersOptions";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useAppDispatch } from "@/shared/redux";
import {
  setBrands,
  setModels,
  setTarifs,
} from "@/entities/filters/slice";

const optionSchema = z
  .object({
    label: z.string(),
    value: z.string(),
  })
  .array();

const optionSchemaModels = z
  .object({
    label: z.string(),
    value: z.string(),
    group: z.string(),
  })
  .array();

const FormSchema = z.object({
  brands: optionSchema,
  models: optionSchemaModels,
  tarifs: optionSchema,
});

export function Filters() {
  const dispatch = useAppDispatch();
  const { modelsOptions, tarifsOptions, brandsOptions } =
    useGetFiltersOptions();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onBrandsChange(data: z.infer<typeof optionSchema>) {
    dispatch(setModels([]));

    form.setValue(
      "models",
      []
    );
    dispatch(setBrands(data.map(({ value }) => value)));
  }

  function onModelsChange(data: z.infer<typeof optionSchema>) {
    dispatch(setModels(data.map(({ value }) => value)));
  }

  function onTarifsChange(data: z.infer<typeof optionSchema>) {
    dispatch(setTarifs(data.map(({ value }) => value)));
  }

  return (
    <Form {...form}>
      <form className={"w-full flex gap-4 mb-5"}>
        <FormField
          control={form.control}
          name="brands"
          render={() => (
            <FormItem className={"w-full"}>
              <FormLabel>Выберете бренд</FormLabel>
              <FormControl>
                <MultipleSelector
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                  options={brandsOptions}
                  groupBy="group"
                  onChange={onBrandsChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="models"
          render={() => (
            <FormItem className={"w-full"}>
              <FormLabel>Выберете модель</FormLabel>
              <FormControl>
                <MultipleSelector
                  value={form.getValues("models")}
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                  options={modelsOptions}
                  groupBy="group"
                  onChange={onModelsChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tarifs"
          render={() => (
            <FormItem className={"w-full"}>
              <FormLabel>Выберете тариф</FormLabel>
              <FormControl>
                <MultipleSelector
                  emptyIndicator={
                    <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
                      no results found.
                    </p>
                  }
                  options={tarifsOptions}
                  groupBy="group"
                  onChange={onTarifsChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
