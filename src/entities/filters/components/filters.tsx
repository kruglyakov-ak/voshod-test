"use client";

import MultipleSelector, { Option } from "@/shared/ui/multiple-selector";
import React from "react";
import { filtersApi } from "../api";

export function Filters() {
  const { data: filters } = filtersApi.useGetFiltersQuery();
  const [modelsOptions, setModelsOptions] = React.useState<Option[]>([]);

  React.useEffect(() => {
    if (filters) {
      setModelsOptions(
        filters?.models?.values
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
    console.log(modelsOptions);
  }, [modelsOptions]);

  return (
    <div>
      <MultipleSelector
        defaultOptions={[]}
        placeholder="Выберете модель..."
        emptyIndicator={
          <p className="text-center text-lg leading-10 text-gray-600 dark:text-gray-400">
            no results found.
          </p>
        }
        groupBy="group"
      />
    </div>
  );
}
