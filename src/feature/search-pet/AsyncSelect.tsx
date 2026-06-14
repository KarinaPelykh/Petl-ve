import AsyncSelect from "react-select/async";

import clsx from "clsx";
import { useAppSelector } from "../../shared/hooks/reduxHooks";
import { cities } from "../../shared/api/redux/notices/selectors";

export const LocationSelect = ({ value, onChange, className }) => {
  const data = useAppSelector(cities);

  const loadOptions = (inputValue, callback) => {
    const options = data.map((item) => ({
      value: `${item.stateEn},${item.cityEn}`,
      label: `${item.cityEn},${item.stateEn}`,
    }));

    if (!inputValue) {
      callback(options);
      return;
    }

    const filteredData = options.filter((opt) =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase().trim()),
    );

    callback(filteredData);
  };

  const currentSelectValue = value
    ? { value, label: value.split(",")[1] || value }
    : null;

  return (
    <AsyncSelect
      value={currentSelectValue}
      loadOptions={loadOptions}
      onChange={(option) => {
        onChange(option ? option.value : "");
      }}
      isSearchable
      defaultOptions
      unstyled
      classNamePrefix="react-select"
      placeholder="Location"
      loadingMessage={() => "Searching..."}
      noOptionsMessage={({ inputValue }) =>
        inputValue
          ? `No users found for "${inputValue}"`
          : "Start typing to search..."
      }
      className={clsx(
        "text-ms desktop-l:p-4 tablet-l:w-42.5 rounded-ms absolute flex h-10.5 w-full items-center justify-between border-none bg-white p-3 text-black outline-none placeholder:text-black/50",
        className,
      )}
    />
  );
};
