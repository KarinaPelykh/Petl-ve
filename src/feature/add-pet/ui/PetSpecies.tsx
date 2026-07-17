import { Controller, useFormContext } from "react-hook-form";
import { usePetSelect } from "../../search-pet/hook/usePetSelect";
import { MySelect } from "../../../shared/ui/Select";

export const PetSpecies = () => {
  const createOptions = (species: string[]) => {
    return species.map((item) => ({ value: item, label: item }));
  };

  const { species } = usePetSelect();

  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="species"
      render={({ field }) => (
        <MySelect
          options={createOptions(species)}
          onChange={field.onChange}
          field="Type of pet"
          className="text-m w-52.5! border border-black/15"
        />
      )}
    />
  );
};
