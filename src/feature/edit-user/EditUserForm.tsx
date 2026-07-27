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
import { useAppDispatch, useAppSelector } from "../../shared/hooks/reduxHooks";
import { editUser } from "../../shared/api/redux/user/operations";
import { auth } from "../../shared/api/redux/user/selectors";

type EditUserFormProps = {
  setOpen: (val: boolean) => void;
};

export const EditUserForm = ({ setOpen }: EditUserFormProps) => {
  const { user } = useAppSelector(auth);

  const defaultValues = {
    name: user.name,
    email: user.email,
    phone: user.phone,
    avatarUrl: user.avatar,
  };

  const form = useForm<EditedUser>({
    defaultValues,
    resolver: zodResolver(editedUserSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: EditedUser) => {
    try {
      dispatch(editUser(data)).unwrap();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal className="desktop-l:p-12.5! px-5 py-10">
      <Form
        form={form}
        onSubmit={form.handleSubmit((data) => onSubmit(data))}
        className="w-full p-0!"
      >
        <Heading className="text-1xl! desktop-l:text-xl mb-5" as="h3">
          Edit information
        </Heading>
        <div className="tablet-l:mb-5 desktop-l:gap-3 mb-2.5 flex flex-col items-center justify-center gap-3">
          {user.avatar ? (
            <img
              src={user.avatar}
              alt="avatar"
              width={80}
              height={80}
              className="block size-full rounded-[50%] object-cover"
            />
          ) : (
            <Icon
              name="user"
              className="tablet-l:size-27.5 desktop-l:size-23.5 size-20"
            />
          )}

          <div className="flex w-full items-center gap-2">
            <FormField name="avatarUrl" className="m-0!">
              <Label htmlFor="avatarUrl" />
              <Input
                type="text"
                placeholder="url"
                className="border-yellow desktop-l:w-56.5! m-0! w-full! py-3.25"
                {...form.register("avatarUrl")}
              />
              <MessageText />
            </FormField>
            <div className="bg-cream rounded-ms flex h-10.5 w-36.5 items-center justify-center gap-2 px-3 py-3.25">
              <p className="text-s"> Upload photo</p>
              <Icon name="upload-cloud" className="size-4.5!" />
            </div>
          </div>
        </div>

        <div className="desktop-l:mb-10 mb-5.25 w-full">
          <FormField name="name">
            <Label htmlFor="name" />
            <Input
              type="text"
              placeholder="Name"
              className="border-yellow"
              {...form.register("name")}
            />
            <MessageText />
          </FormField>
          <FormField name="email">
            <Label htmlFor="email" />
            <Input
              type="text"
              className="border-yellow"

              placeholder="name00@gmail.com"
              {...form.register("email")}
            />
            <MessageText />
          </FormField>
          <FormField name="phone">
            <Label htmlFor="phone" />

            <Input
              type="text"
              placeholder="+380"
              className="border-yellow"
              {...form.register("phone")}
            />
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
