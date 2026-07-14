import { useForm } from "react-hook-form";
import { Icon } from "../../shared/ui/Icon";
import { Button } from "../../shared/ui/Button";
import {
  Form,
  FormField,
  Input,
  ItemLabel,
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
import { useEffect } from "react";

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
    avatarFile: undefined,
  };

  const form = useForm<EditedUser>({
    defaultValues,
    resolver: zodResolver(editedUserSchema),
  });

  const dispatch = useAppDispatch();

  const onSubmit = (data: EditedUser) => {
    const { name, email, phone, avatarUrl, avatarFile } = data;

    const avatar = avatarFile || avatarUrl;

    try {
      dispatch(editUser({ name, email, phone, avatar })).unwrap();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  // eslint-disable-next-line react-hooks/incompatible-library
  const avatarFile = form.watch("avatarFile");
  const avatarUrl = form.watch("avatarUrl");

  useEffect(() => {
    if (avatarFile) {
      form.setValue("avatarUrl", "");
    }
  }, [avatarFile]);

  useEffect(() => {
    if (avatarUrl) {
      form.setValue("avatarFile", undefined);
    }
  }, [avatarUrl]);

  return (
    <Modal className="desktop-l:p-12.5! px-5 py-10">
      <Form
        form={form}
        onSubmit={form.handleSubmit((data) => {
          console.log(data);
          onSubmit(data);
        })}
        className="w-full p-0!"
      >
        <Heading className="text-1xl! desktop-l:text-xl mb-5" as="h3">
          Edit information
        </Heading>
        <div className="tablet-l:mb-5 desktop-l:gap-2 mb-2.5 flex flex-col items-center justify-center gap-3">
          <div className="size-20">
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
          </div>

          <div className="flex w-full items-center gap-2">
            <FormField name="avatarUrl" className="m-0!">
              <Label htmlFor="avatarUrl" />
              <Input
                type="text"
                placeholder="url"
                className="border-yellow desktop-l:w-56.5! m-0! h-10.5 w-full! py-3.25"
                {...form.register("avatarUrl")}
              />
              <MessageText />
            </FormField>

            <FormField name="avatarFile" className="m-0!">
              <ItemLabel className="bg-cream rounded-ms flex h-10.5 w-36.5 cursor-pointer items-center justify-center gap-2 px-3 py-3.25">
                <Label htmlFor="avatarFile" className="text-s">
                  Upload photo
                  <Input
                    {...form.register("avatarFile")}
                    type="file"
                    className="hidden"
                    id="avatarFile"
                    accept="image/png"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      form.setValue("avatarFile", file);
                    }}
                  />
                </Label>
                <Icon name="upload-cloud" className="size-4.5!" />
              </ItemLabel>
              <MessageText />
            </FormField>
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
