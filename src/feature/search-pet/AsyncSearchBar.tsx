import clsx from "clsx";
import AsyncSelect from "react-select/async";

type Option = {
  locationId: string;
  value: string;
  label: string;
};

type Locations = {
  _id: string;
  stateEn?: string;
  cityEn: string;
  countyEn: string;
};
type AsyncSearchBarProps = {
  onChange: (value: Option | null) => void;
  className?: string;
  value: Option | null;
};

export const AsyncSearchBar = ({
  onChange,
  className,
  value,
}: AsyncSearchBarProps) => {
  const loadOptions = (inputValue: string) => {
    if (inputValue.length < 3) {
      return Promise.resolve([]);
    }

    return fetch(
      `https://petlove.b.goit.study/api/cities/?keyword=${inputValue}`,
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);

        return data.map(({ _id, stateEn, cityEn, countyEn }: Locations) => ({
          locationId: _id,
          value: `${stateEn},${cityEn}`,
          label: `${cityEn} (${stateEn} обл., ${countyEn} р-н)`,
        }));
      });
  };

  return (
    <AsyncSelect
      value={value}
      cacheOptions={true}
      defaultOptions={true}
      isSearchable={true}
      isClearable={true}
      onChange={(option) => onChange(option)}
      loadOptions={loadOptions}
      unstyled
      classNamePrefix="react-select"
      placeholder="Location"
      loadingMessage={() => "Searching..."}
      noOptionsMessage={({ inputValue }) =>
        inputValue
          ? `No location found for "${inputValue}"`
          : "Start typing to search..."
      }
      className={clsx(
        "text-ms desktop-l:p-4 tablet-l:w-42.5 rounded-ms outline-yellow absolute flex h-10.5 w-full items-center justify-between border-none bg-white p-3 text-black shadow-lg placeholder:text-black/50",
        className,
      )}
    />
  );
};
