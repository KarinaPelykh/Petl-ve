import { Form, Input } from "../../shared/ui/Form";
import { CATEGORY, GENDER, TYPE } from "./constants";
import { Select } from "./Select";

export const SearchPetFrom = () => {
  return (
    <Form className="bg-cream! p-5 flex flex-col gap-3">
      <Input
        placeholder="Search"
        className="border-none bg-white p-3 rounded-ms"
      />
      <div className="flex  gap-2">
        <Select data={CATEGORY} />
        <Select data={GENDER} />
      </div>
      <Select data={TYPE} />

      <Input
        placeholder="Location"
        className="border-none bg-white p-3 rounded-ms"
      />
    </Form>
  );
};
