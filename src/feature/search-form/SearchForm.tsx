import {
  FormField,
  Form,
  Input,
  Label,
  MessageText,
} from "../../shared/ui/Form";
import { Button } from "../../shared/ui/Button";
import { Icon } from "../../shared/ui/Icon";

export const SearchForm = () => {
  return (
    <Form className="bg-transparent! rounded-none p-0! relative mb-6 tablet-l:w-57.5 tablet-l:m-0">
      <FormField name="search" className=" mb-0!">
        <Label htmlFor="search" />
        <Input type="search" id="search" placeholder="Search" />
        <MessageText />
      </FormField>

      <Button type="submit" className="absolute right-5">
        <Icon
          name="search"
          className="size-4.5 stroke-black fill-transparent "
        />
      </Button>
    </Form>
  );
};
