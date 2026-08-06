import { Controller, useForm, type Resolver } from "react-hook-form";

import "./addmodule.css";
import "react-datepicker/dist/react-datepicker.css";
import {
  Form,
  Input,
  Label,
  MessageText,
  ItemLabel,
  FormField,
} from "../../../shared/ui/Form";
import { Heading } from "../../../shared/ui/Heading";
import { RadioGroupBtn } from "../../../shared/ui/RadioGroupBtn";
import { Icon } from "../../../shared/ui/Icon";
import { Button } from "../../../shared/ui/Button";

import { zodResolver } from "@hookform/resolvers/zod";
import { petSchema, type PetData } from "../model/contract";
import { PetSpecies } from "./PetSpecies";
import { PetBirthdayDate } from "./PetBirthDate";
// import { useManageAvatar } from "../../../shared/hooks/useManageAvatar";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { addPet } from "../../../shared/api/redux/user/operations";

type SubmitData = {
  title: string;
  name: string;
  imgURL: string | File;
  species: string;
  birthday: string;
  sex: string;
};
const genderOption = [
  { label: "female", value: "female" },
  { label: "male", value: "male" },
  { label: "gender", value: "gender" },
];

const defaultValues = {
  title: "",
  name: "",
  avatarUrl: "",
  avatarFile: undefined,
  species: "",
  birthday: "",
  sex: "",
};

export const AddPetForm = () => {
  const form = useForm<PetData>({
    defaultValues,
    resolver: zodResolver(petSchema) as Resolver<PetData>,
  });

  const dispatch = useAppDispatch();
  // useManageAvatar({ form });

  const submitForm = (data: SubmitData) => {
    try {
      dispatch(addPet(data)).unwrap();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={form.handleSubmit(
        ({ title, name, avatarUrl, avatarFile, species, birthday, sex }) => {
          const imgURL = avatarUrl || avatarFile;

          if (!imgURL) return;
          const params = {
            title,
            name,
            imgURL,
            species,
            birthday,
            sex,
          };

          submitForm(params);
        },
      )}
      form={form}
      className="desktop-l:px-20 desktop-l:py-15 my-0! h-auto w-148"
    >
      <Heading className="desktop-l:text-4xl desktop-l:mb-10 mb-5" as="h3">
        Add my pet /
        <span className="text-m text-black/40">Personal details</span>
      </Heading>

      <Controller
        name="sex"
        control={form.control}
        rules={{ required: true }}
        render={({ field }) => {
          return (
            <RadioGroupBtn
              data={genderOption}
              filterValue={field.value}
              onChange={field.onChange}
              variant="icon"
            />
          );
        }}
      />

      <div className="tablet-l:mb-5 mb-7 flex flex-col items-center justify-center gap-2">
        <div className="bg-cream desktop-l:size-21.5 desktop-l:mb-3 flex items-center justify-center rounded-[50%]">
          <Icon name="footprint" className="tablet-l:size-11 size-23.5" />
        </div>

        <div className="flex w-full items-center gap-2">
          <FormField name="avatarUrl" className="m-0! w-69.5">
            <Label htmlFor="avatarUrl" />
            <Input
              type="text"
              placeholder="url"
              className="m-0! h-10.5 w-full! border-black/15! py-3.25"
              {...form.register("avatarUrl")}
            />
            <MessageText />
          </FormField>

          <FormField name="avatarFile" className="m-0!">
            <ItemLabel className="bg-cream rounded-ms flex h-10.5 w-36.5 cursor-pointer items-center justify-center gap-2 px-3">
              <Label htmlFor="avatarFile" className="text-ms">
                Upload photo
                <Input
                  {...form.register("avatarFile")}
                  type="file"
                  className="hidden"
                  id="avatarFile"
                  accept="image/png"
                  onChange={(e) => {
                    console.log(e.target.files?.[0]);

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
      <div className="mb-10 w-full">
        <FormField name="title">
          <Label htmlFor="title" />
          <Input
            type="text"
            placeholder="Title"
            className="border-black/15!"
            {...form.register("title")}
          />
          <MessageText />
        </FormField>
        <FormField name="petsName">
          <Label htmlFor="petsName" />
          <Input
            type="text"
            placeholder="Pet’s Name"
            className="border-black/15!"
            {...form.register("name")}
          />
          <MessageText />
        </FormField>

        <div className="flex gap-3">
          <PetBirthdayDate />
          <PetSpecies />
        </div>
      </div>
      <div className="flex items-center justify-end gap-2">
        <Button type="submit" className="text-m w-42.5 bg-black/5 text-black">
          Back
        </Button>
        <Button type="submit" className="bg-yellow text-m w-42.5 text-white">
          Sumbit
        </Button>
      </div>
    </Form>
  );
};
