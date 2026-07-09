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
import { useAppDispatch } from "../../shared/hooks/reduxHooks";
import { editUser } from "../../shared/api/redux/user/operations";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  avatar: "",
};

export const EditUserForm = () => {
  const form = useForm<EditedUser>({
    defaultValues,
    resolver: zodResolver(editedUserSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data) => {
    try {
      dispatch(editUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal className="p-12.5!">
      <Form
        form={form}
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full p-0!"
      >
        <Heading className="mb-5 text-xl" as="h3">
          Edit information
        </Heading>
        <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
          <Icon name="user" className="tablet-l:size-27.5 size-23.5" />
          <div className="flex w-full items-center gap-2">
            <FormField name="avatar" className="m-0!">
              <Input
                type="text"
                placeholder="url"
                id="avatar"
                className="border-yellow m-0! h-10.5 w-56.5!"
                {...form.register("avatar")}
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
            <Input type="text" placeholder="Name" {...form.register("name")} />
            <MessageText />
          </FormField>
          <FormField name="email">
            <Label htmlFor="email" />
            <Input
              type="text"
              placeholder="name00@gmail.com"
              {...form.register("email")}
            />
            <MessageText />
          </FormField>
          <FormField name="phone">
            <Label htmlFor="phone" />
            <Input type="text" placeholder="+380" {...form.register("phone")} />
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
