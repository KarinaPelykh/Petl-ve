import { useState } from "react";
import { usePetSelect } from "../feature/search-pet/hook/usePetSelect";
import { Button } from "../shared/ui/Button";
import { Form, FormField, Input, Label, MessageText } from "../shared/ui/Form";
import { Heading } from "../shared/ui/Heading";
import { Icon } from "../shared/ui/Icon";
import { MySelect } from "../shared/ui/Select";
import { PetBlock } from "../widget/pet-block/PetBlock";
import { DatePicker } from "react-datepicker";
import "./addmodule.css";
import "react-datepicker/dist/react-datepicker.css";
import { RadioGroupBtn } from "../shared/ui/RadioGroupBtn";
import { useForm } from "react-hook-form";

const genderOption = [
  { label: "female", value: "female" },
  { label: "male", value: "male" },
  { label: "gender", value: "gender" },
];

export const AddPetPage = () => {
  const createOptions = (species: string[]) => {
    return species.map((item) => ({ value: item, label: item }));
  };

  const { species } = usePetSelect();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const form = useForm();
  return (
    <section className="desktop-l:pb-8">
      <div className="desktop-l:flex desktop-l:gap-8 container">
        <PetBlock variant="second-dog" />
        <Form
          form={form}
          className="desktop-l:px-20 desktop-l:py-15 my-0! h-auto w-148"
        >
          <Heading className="desktop-l:text-4xl desktop-l:mb-10 mb-5" as="h3">
            Add my pet /
            <span className="text-m text-black/40">Personal details</span>
          </Heading>
          <RadioGroupBtn
            data={genderOption}
            filterValue=""
            onChange={() => {}}
            reset={() => {}}
            variant="icon"
          />
          <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
            <div className="bg-cream desktop-l:size-21.5 desktop-l:mb-3 flex items-center justify-center rounded-[50%]">
              <Icon name="footprint" className="tablet-l:size-11 size-23.5" />
            </div>
            <div className="flex w-full items-center gap-2">
              <FormField name="avatar" className="m-0! w-69.5">
                <Input
                  type="text"
                  placeholder="Enter URL"
                  id="avatar"
                  className="m-0! h-10.5 border-black/15!"
                />
              </FormField>

              <div className="bg-cream rounded-ms flex h-10.5 w-36.5 cursor-pointer items-center justify-center gap-2 py-3">
                <label htmlFor="file" className="text-ms">
                  Upload photo
                  <input
                    type="file"
                    id="file"
                    className="hidden"
                    data-size="lg"
                    name="upload"
                    accept="image/png"
                    ngf-max-size="2MB"
                  />
                </label>
                <Icon name="upload-cloud" className="size-4.5!" />
              </div>
            </div>
          </div>
          <div className="mb-10 w-full">
            <FormField name="title">
              <Label htmlFor="title" />
              <Input
                type="text"
                placeholder="Title"
                className="border-black/15!"
              />
              <MessageText />
            </FormField>
            <FormField name="userName">
              <Label htmlFor="userName" />
              <Input
                type="text"
                placeholder="Pet’s Name"
                className="border-black/15!"
              />
              <MessageText />
            </FormField>

            <div className="flex gap-3">
              <DatePicker
                showIcon
                icon={
                  <Icon
                    name="calendar"
                    className="size-5! stroke-black stroke-[0.5px]"
                  />
                }
                toggleCalendarOnIconClick
                dateFormat="dd.MM.yyyy"

                selected={selectedDate}
                onChange={setSelectedDate}
                className="rounded-ms h-10.5 w-52.5! items-center justify-between border border-black/15 p-3 font-medium text-black shadow-lg outline-none placeholder:text-black/50"
              />
              <MySelect
                options={createOptions(species)}
                field="Type of pet"
                className="text-m w-52.5! border border-black/15"
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
