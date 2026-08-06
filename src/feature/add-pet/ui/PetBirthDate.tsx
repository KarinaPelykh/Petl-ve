import DatePicker from "react-datepicker";
import { Controller, useFormContext } from "react-hook-form";
import { Icon } from "../../../shared/ui/Icon";
import { format } from "date-fns";

export const PetBirthdayDate = () => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name="birthday"
      render={({ field }) => (
        <DatePicker
          selected={field.value}
          onChange={(date: Date | null) => {
            const formattedDate = date ? format(date, "yyyy-MM-dd") : null;
            field.onChange(formattedDate);
          }}
          onBlur={field.onBlur}
          showIcon
          placeholderText="00.00.0000"
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
