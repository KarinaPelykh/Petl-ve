import { useState } from "react";
import { usePetSelect } from "../feature/search-pet/hook/usePetSelect";
import { Button } from "../shared/ui/Button";
import { Form, FormField, Input, Label, MessageText } from "../shared/ui/Form";
import { Heading } from "../shared/ui/Heading";
import { Icon } from "../shared/ui/Icon";
// import { RadioGroupBtn } from "../shared/ui/RadioGroupBtn";
import { MySelect } from "../shared/ui/Select";
import { PetBlock } from "../widget/pet-block/PetBlock";
import { DatePicker } from "react-datepicker";

import "./addmodule.css";

import "react-datepicker/dist/react-datepicker.css";
// const gender = [
//   { name: "female", value: "female", key: "female" },
//   { name: "male", value: "male", key: "male" },
//   { name: "gender", value: "gender", key: "gender" },
// ];
export const AddPetPage = () => {
  const createOptions = (species: string[]) => {
    return species.map((item) => ({ value: item, label: item }));
  };

  const { species } = usePetSelect();
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section className="desktop-l:pb-8">
      <div className="desktop-l:flex desktop-l:gap-8 container">
        <PetBlock variant="second-dog" />
        <Form className="desktop-l:px-20 desktop-l:py-15 w-148">
          <Heading className="desktop-l:text-4xl desktop-l:mb-10 mb-5" as="h3">
            Add my pet /
            <span className="text-m text-black/40">Personal details</span>
          </Heading>
          {/* <RadioGroupBtn gender={gender} /> */}

          <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
            <div className="bg-cream desktop-l:size-21.5 desktop-l:mb-3 flex items-center justify-center rounded-[50%]">
              <Icon name="footprint" className="tablet-l:size-11 size-23.5" />
            </div>
            <div className="flex w-full items-center gap-2">
              <FormField name="avatar" className="m-0! w-full">
                <Input
                  type="text"
                  placeholder="Enter URL"
                  id="avatar"
                  className="m-0! h-10.5 border-black/15"
                />
              </FormField>

              <div className="cursor-pointer">
                <input
                  type="file"
                  id="file"
                  className="hidden"
                  data-size="lg"
                  name="upload"
                  accept="image/png"
                  ngf-max-size="2MB"
                />
                <label
                  htmlFor="file"
                  className="rounded-ms bg-cream flex h-10.5 w-[146px] items-center gap-2 px-4"
                >
                  <span className="text-ms inline"> Upload photo </span>
                  <Icon name="upload-cloud" className="size-4.5!" />
                </label>
              </div>
            </div>
          </div>
          <div className="mb-10 w-full">
            <FormField name="title">
              <Label htmlFor="title" />
              <Input
                type="text"
                placeholder="Title"
                // {...form.register("name")}
              />
              <MessageText />
            </FormField>
            <FormField name="userName">
              <Label htmlFor="userName" />
              <Input
                type="text"
                placeholder="Pet’s Name"
                // {...form.register("email")}
              />
              <MessageText />
            </FormField>

            <div className="flex gap-3">
              <DatePicker
                showIcon
                icon={<Icon name="calendar" className="size-5 stroke-black" />}
                toggleCalendarOnIconClick
                dateFormat="dd.MM.yyyy"
                selected={selectedDate}
                onChange={setSelectedDate}
                className="desktop-l:w-47.5 text-ms tablet-l:w-42.5 rounded-ms h-10.5 w-full items-center justify-between border border-black/15 bg-white p-3 font-medium text-black shadow-lg outline-none placeholder:text-black/50"
              />
              <MySelect
                options={createOptions(species)}
                field="Type of pet"
                className="desktop-l:w-47.5 border! border-black/15!"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-2">
            <Button
              type="submit"
              className="text-m w-42.5 bg-black/5 text-black"
            >
              Back
            </Button>
            <Button
              type="submit"
              className="bg-yellow text-m w-42.5 text-white"
            >
              Sumbit
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};
