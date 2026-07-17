import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { Icon } from "../../../shared/ui/Icon";

export const PetBirthdayDate = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="birthday"
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={field.onChange}
          onBlur={field.onBlur}
          showIcon
          icon={
            <Icon
              name="calendar"
              className="size-5! stroke-black stroke-[0.5px]"
            />
          }
          toggleCalendarOnIconClick
          dateFormat="dd.MM.yyyy"
          className="rounded-ms h-10.5 w-52.5! items-center justify-between border border-black/15 p-3 font-medium text-black shadow-lg outline-none placeholder:text-black/50"
        />
      )}
    />
  );
};
