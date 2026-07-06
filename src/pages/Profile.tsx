import { useForm } from "react-hook-form";
import { Button } from "../shared/ui/Button";
import { Form, FormField, Input, Label, MessageText } from "../shared/ui/Form";
import { Icon } from "../shared/ui/Icon";
import { useAppSelector } from "../shared/hooks/reduxHooks";
import { favorite, notices } from "../shared/api/redux/notices/selectors";
import {
  PetCard,
  PetControl,
  PetDescription,
  PetImage,
  PetInfoTable,
  PetPrice,
  PetTitle,
} from "../entities";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
};

export const UserProfile = () => {
  const form = useForm({ defaultValues });
  const data = useAppSelector(favorite);
  const getNotices = useAppSelector(notices);

  const filteredData = getNotices.results.filter((notice) =>
    data.includes(notice._id),
  );

  return (
    <section className="desktop-l:pb-8 tablet-l:pb-45.5 pb-35">
      <div className="desktop-l:flex desktop-l:gap-8 container items-start">
        <Form
          form={form}
          className="max-tablet-l:w-83.75 max-desktop-l:w-176 desktop-l:rounded-m desktop-l:w-130! tablet-l:p-10 desktop-l:m-0 mx-auto px-5 pt-5 pb-10"
        >
          <div className="mb-5 flex items-center justify-between">
            <div className="bg-yellow rounded-ms flex h-9.5 w-20 items-center justify-center gap-1">
              <p className="text-ms text-white">User</p>
              <Icon name="user-2" className="size-4.5" />
            </div>

            <Button
              variant="secondary"
              className="flex size-9.5 items-center justify-center rounded-[50%] p-0!"
            >
              <Icon name="edit" className="size-4.5" />
            </Button>
          </div>
          <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
            <Icon name="user" className="tablet-l:size-27.5 size-23.5" />

            <input
              type="file"
              id="file"
              className="hidden"
              data-size="lg"
              name="upload"
              accept="image/png"
              ngf-max-size="2MB"
            />
            <label htmlFor="file" className="underline">
              Upload photo
            </label>
          </div>

          <div className="tablet-l:mb-20 mb-10 w-full">
            <p className="text-m mb-5">My information</p>
            <div className="tablet-l:flex tablet-l:flex-wrap tablet-l:gap-3.5 tablet-l:justify-between desktop-l:flex-col desktop-l:gap-0">
              <FormField name="name">
                <Label htmlFor="name" />
                <Input
                  type="text"
                  placeholder="Name"
                  className="max-desktop-l:w-76.25!"
                />
                <MessageText />
              </FormField>
              <FormField name="email">
                <Label htmlFor="email" />
                <Input
                  type="text"
                  placeholder="name00@gmail.com"
                  className="max-desktop-l:w-76.25!"
                />
                <MessageText />
              </FormField>
            </div>

            <FormField name="phone" className="tablet-l:mb-0! desktop-l:mb-3.5">
              <Label htmlFor="phone" />
              <Input
                type="text"
                placeholder="+380"
                className="max-desktop-l:w-76.25!"
              />
              <MessageText />
            </FormField>

            <div className="mt-10 flex items-center justify-between">
              <p className="text-m">My pets</p>
              <Button
                variant="primary"
                className="flex w-fit items-center justify-between gap-2 rounded-[50%]"
              >
                Add pet <Icon name="plus" className="size-4.5" />
              </Button>
            </div>
          </div>
          <Button
            variant="secondary"
            className="w-fit rounded-[50%] px-7 py-3 uppercase"
          >
            Log out
          </Button>
        </Form>
        <div className="max-tablet-l:w-83.75 max-desktop-l:w-176 desktop-l:mx-0 mx-auto mt-10 flex flex-col">
          <div className="mb-20 flex items-center gap-2.5">
            <Button className="bg-yellow text-ms w-fit p-3 text-white">
              My favorite pets
            </Button>

            <Button className="desktop-l:py-3 text-ms w-30.75 bg-white text-black capitalize">
              Viewed
            </Button>
          </div>
          {filteredData.length ? (
            <ul className="flex flex-row gap-2.5">
              {filteredData.map((item) => (
                <PetCard
                  key={item._id}
                  notice={item}
                  // setCardId={setCardId}
                  className="desktop-l:w-90.75"
                >
                  <PetImage />
                  <div>
                    <PetTitle />
                    <PetInfoTable />
                    <PetDescription />
                    <PetPrice />
                    <PetControl
                      setIsFavorite={setIsFavorite}
                      onClick={(id: string) =>
                        isLoggIn && dispatch(addFavorite(id))
                      }
                    />
                  </div>
                </PetCard>
              ))}
            </ul>
          ) : (
            <p className="text-ms tablet-l:w-114.5 desktop-l:mt-45 mx-auto text-center">
              Oops,
              <span className="text-yellow">
                looks like there aren't any furries
              </span>
              on our adorable page yet. Do not worry! View your pets on the
              "find your favorite pet" page and add them to your favorites.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
