import { filtersApi } from "@/entities/filters/api";
import React from "react";
import { Option } from "@/shared/ui/multiple-selector";

export const useGetFiltersOptions = () => {
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
        filters?.models?.values
          .filter(({brand}) => true)
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
  }, [filters, brandsOptions]);

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

  return {
    modelsOptions,
    brandsOptions,
    tarifsOptions};
}