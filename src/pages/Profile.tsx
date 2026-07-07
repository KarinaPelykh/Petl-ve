// import { useFrm } from "rea ct -h ook-form";
// import { Button } from "../shared/ui/Button";
// import { Form, FormField, Input, Label, MessageText } from "../shared/ui/Form";
// import { Icon } from "../shared/ui/Icon";
// import { useAppDispatch, useAppSelector } from "../shared/hooks/reduxHooks";
// import { favorite, notices } from "../shared/api/redux/notices/selectors";
// import {
//   PetCard,
//   PetControl,
//   PetDescription,
//   PetImage,
//   PetInfoTable,
//   PetPrice,
//   PetTitle,
// } from "../entities";
// import { useNavigate } from "react-router";

// const defaultValues = {
//   name: "",
//   email: "",
//   phone: "",
// };

import { UserBlock } from "../entities/user/UserBlock";
import { AddAnimals } from "../feature/add-animals/AddAnimals";
import { UserNoticesTab } from "../feature/user-notices-tab/UserNoticesTab";
import { Button } from "../shared/ui/Button";
export const UserProfile = () => {
  // const form = useForm({ defaultValues });
  // const data = useAppSelector(favorite);
  // const getNotices = useAppSelector(notices);
  // const navigate = useNavigate();
  // const filteredData = getNotices.results.filter((notice) =>
  //   data.includes(notice._id),
  // );

  // const dispatch = useAppDispatch();

  return (
    <section className="desktop-l:pb-8 tablet-l:pb-45.5 pb-35">
      <div className="desktop-l:flex desktop-l:gap-8 container items-start">
        <div className="rounded-ms max-tablet-l:w-83.75 max-desktop-l:w-176 desktop-l:rounded-m desktop-l:w-130! tablet-l:p-10 desktop-l:m-0 mx-auto my-auto flex flex-col bg-white px-5 py-7 pt-5 pb-10">
          <UserBlock />
          <AddAnimals />
          <Button
            variant="secondary"
            className="w-fit rounded-[50%] px-7 py-3 uppercase"
          >
            Log out
          </Button>
        </div>
        {/* <Form
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
              <Link
                to="/add-pet"
                className="bg-yellow primary rounded-ms flex w-[118px] items-center justify-center gap-2 p-2.5 text-white"
              >
                Add pet <Icon name="plus" className="size-4.5" />
              </Link>
            </div>
          </div>
          <Button
            // onClick={() => {
            //   dispatch(signout());
            //   navigate("/");
            // }}
            variant="secondary"
            className="w-fit rounded-[50%] px-7 py-3 uppercase"
          >
            Log out
          </Button>
        </Form> */}

        <UserNoticesTab />
        {/* <div className="max-tablet-l:w-83.75 max-desktop-l:w-176 desktop-l:mx-0 mx-auto mt-10 flex flex-col"> */}
        {/* {filteredData.length ? (
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
                    // setIsFavorite={setIsFavorite}
                    // onClick={(id: string) =>
                    //   isLoggIn && dispatch(addFavorite(id))
                    // }
                    />
                  </div>
                </PetCard>
              ))} )
            </ul>    : (  )}*/}

        {/* </div> */}
      </div>
    </section>
  );
};
