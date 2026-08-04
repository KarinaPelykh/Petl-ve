import { useEffect, useState } from "react";
import type { LocationResponse, Option } from "../types/select.type";
import { getLocations } from "../../../shared/api/services";

export const useCreateLocationOptions = () => {
  const [options, setOptions] = useState<Option[]>([]);

  useEffect(() => {
    async function fetchAllLocation() {
      try {
        const response = await getLocations();

        const options = response.map(
          ({ _id, stateEn, cityEn }: LocationResponse): Option => ({
            locationId: _id,
            value: `${stateEn},${cityEn}`,
            label: `${stateEn}, ${cityEn}`,
          }),
        );

        setOptions(options);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllLocation();
  }, []);

  return { options };
};
