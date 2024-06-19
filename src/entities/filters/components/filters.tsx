"use client";

import MultipleSelector, { Option } from "@/shared/ui/multiple-selector";
import React from "react";
import { filtersApi } from "../api";

export function Filters() {
  const { data: filters } = filtersApi.useGetFiltersQuery();
  const [modelsOptions, setModelsOptions] = React.useState<Option[]>([]);
  const [brandsOptions, setBrandsOptions] = React.useState<Option[]>([]);
  const [tarifsOptions, setTarifsOptions] = React.useState<Option[]>([]);

  React.useEffect(() => {
    if (filters) {
      setBrandsOptions(
        filters?.brands?.values
          .map((brand) => ({
            label: brand,
            value: brand,
          })))
      }
  }, [filters]);

  React.useEffect(() => {
    if (filters) {
      setModelsOptions(
        filters?.models?.values.filter(({}) => true)
          .map(({ brand, models }) =>
            models.map((model) => ({
              label: model,
              value: model,
              group: brand,
            })),
          )
          .flat() || [],
      );
    }
  }, [filters]);

  React.useEffect(() => {
    if (filters) {
    setTarifsOptions(
      Object.entries(filters?.tarif?.values || {})
        .map((tarif) => ({
          label: tarif[1],
          value: tarif[0],
        }))
    )
    }
  }, [filters]);

  return (
    <div>
      <MultipleSelector
        placeholder="Выберете бренд..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        options={brandsOptions}
        groupBy="group"
      />
      <MultipleSelector
        placeholder="Выберете модель..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        options={modelsOptions}
        groupBy="group"
      />
      <MultipleSelector
        placeholder="Выберете тфриф..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        options={tarifsOptions}
        groupBy="group"
      />
    </div>
  );
}
