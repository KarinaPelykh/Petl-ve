import { useForm } from "react-hook-form";
import { Icon } from "../../shared/ui/Icon";
import { Button } from "../../shared/ui/Button";
import {
  Form,
  FormField,
  Input,
  Label,
  MessageText,
} from "../../shared/ui/Form";
import { Modal } from "../../shared/ui/Modal";
import { Heading } from "../../shared/ui/Heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { editedUserSchema, type EditedUser } from "./model/contracts";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  img: "",
};

export const EditUserForm = () => {
  const form = useForm<EditedUser>({
    defaultValues,
    resolver: zodResolver(editedUserSchema),
  });

  const onSubmit = () => {};

  return (
    <Modal className="p-12.5!">
      <Form
        form={form}
        onSubmit={onSubmit}
        className="w-full p-0!"
        // className="max-tablet-l:w-83.75 max-desktop-l:w-176 desktop-l:rounded-m desktop-l:w-130! tablet-l:p-10 desktop-l:m-0 mx-auto px-5 pt-5 pb-10"
      >
        <Heading className="mb-5 text-xl" as="h3">
          Edit information
        </Heading>
        <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
          <Icon name="user" className="tablet-l:size-27.5 size-23.5" />
          <div className="flex w-full items-center gap-2">
            <FormField name="image" className="m-0!">
              <Input
                type="text"
                placeholder="url"
                id="image"
                className="border-yellow m-0! h-10.5 w-56.5!"
                name="upload"
              />
            </FormField>

            <div className="rounded-ms bg-cream flex h-10.5 w-fit items-center px-4">
              <label htmlFor="file" className="">
                Upload photo
              </label>
            </div>
          </div>
        </div>

        <div className="mb-10 w-full">
          <FormField name="name">
            <Label htmlFor="name" />
            <Input type="text" placeholder="Name" />
            <MessageText />
          </FormField>
          <FormField name="email">
            <Label htmlFor="email" />
            <Input type="text" placeholder="name00@gmail.com" />
            <MessageText />
          </FormField>
          <FormField name="phone">
            <Label htmlFor="phone" />
            <Input type="text" placeholder="+380" />
            <MessageText />
          </FormField>
        </div>
        <Button type="submit" className="bg-yellow text-white">
          Save
        </Button>
      </Form>
    </Modal>
  );
};
