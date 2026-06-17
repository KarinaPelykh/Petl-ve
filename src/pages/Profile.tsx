import { useForm } from "react-hook-form";
import { Button } from "../shared/ui/Button";
import { Form, FormField, Input, Label, MessageText } from "../shared/ui/Form";
import { Icon } from "../shared/ui/Icon";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
};

export const UserProfile = () => {
  const form = useForm({ defaultValues });
  return (
    <section>
      <div className="desktop-l:flex container">
        <Form form={form}>
          <div className="mb-5 flex items-center justify-between">
            <div className="bg-yellow rounded-ms flex h-9.5 w-20 items-center justify-center gap-1">
              <p className="text-ms text-white">User</p>
              {/* You have to exchange user icon */}
              <Icon name="user-2" className="size-4.5" />
            </div>

            <Button className="bg-cream w-fit rounded-[50%]">
              <Icon name="edit" className="size-4.5" />
            </Button>
          </div>
          <div className="mx-auto mb-7.5 size-23.5 overflow-hidden rounded-[50%]">
            <img
              src="/public/image/image1.png"
              alt="user"
              width={94}
              height={94}
              className="block h-full w-full object-cover"
            />
          </div>

          <div>
            <p className="text-m mb-5">My information</p>
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

            <div className="mt-10 flex items-center justify-between">
              <p className="text-m mb-5">My pets</p>
              <Button className="bg-yellow flex w-fit items-center justify-between gap-2 rounded-[50%] text-white">
                Add pet <Icon name="plus" className="size-4.5" />
              </Button>
            </div>
          </div>
          <Button className="bg-cream text-yellow w-fit rounded-[50%] px-7 py-3 uppercase">
            Log out
          </Button>
        </Form>
        <div className="mt-10">
          <div className="mb-20 flex items-center gap-2.5">
            <Button className="bg-yellow text-ms w-fit p-3 text-white">
              My favorite pets
            </Button>
            <Button className="desktop-l:py-3 text-ms w-30.75 bg-white text-black capitalize">
              Viewed
            </Button>
          </div>
          <p className="text-ms mb-35">
            Oops,{" "}
            <span className="text-yellow">
              looks like there aren't any furries
            </span>{" "}
            on our adorable page yet. Do not worry! View your pets on the "find
            your favorite pet" page and add them to your favorites.
          </p>
        </div>
      </div>
    </section>
  );
};
