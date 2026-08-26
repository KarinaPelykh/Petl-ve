// import clsx from "clsx";
// import { RadioGroup } from "radix-ui";
// import { Icon } from "./Icon";

// type GenderKey = "gender" | "female" | "male";

// type Style = { [K in GenderKey]: string };

// const styles: Style = {
//   gender: "bg-yellow/10!",
//   female: "bg-pink/10!",
//   male: "bg-blue/10!",
// };

// type Data = {
//   label: GenderKey | string;
//   value: string | boolean;
// };

// type RadioGroupBtnProps = {
//   onChange?: (val: string | boolean) => void;
//   data: Data[];
//   filterValue?: string | boolean | null;
//   reset?: () => void;
//   variant?: "icon" | "text";
// };

// export const RadioGroupBtn = ({
//   filterValue,
//   data,
//   onChange,
//   reset,
//   variant = "text",
// }: RadioGroupBtnProps) => {
//   console.log(typeof filterValue);

//   return (
//     <RadioGroup.Root
//       className="flex h-10.5 gap-2"
//       value={!filterValue ? "" : String(filterValue)}
//       onValueChange={(val) => onChange?.(val === "true" || val)}
//     >
//       {data.map(({ label, value }) => (
//         <RadioGroup.Item
//           key={label}
//           value={String(value)}
//           className={clsx(
//             styles[label as GenderKey],

//             filterValue === String(value) && "bg-yellow text-white",
//             "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 tablet-l:p-3 flex w-fit cursor-pointer items-center border border-transparent bg-white p-1.5 font-normal text-black transition-all duration-200 hover:shadow-lg",
//           )}
//         >
//           {variant === "text" && label}
//           {/* {variant === "icon" && (
//             <Icon name={label} className="desktop-l:size-6 size-5" />
//           )} */}

//           {filterValue === String(value) && (
//             <Icon
//               name="close"
//               className="ml-1.5 size-4.5 stroke-white"
//               onClick={reset}
//             />
//           )}
//         </RadioGroup.Item>
//       ))}
//     </RadioGroup.Root>
//   );
// };
///////////////////////////// 1 version
// import clsx from "clsx";
// import { RadioGroup } from "radix-ui";
// import { Icon } from "./Icon";

// // type GenderKey = "gender" | "female" | "male";

// // type Style = { [K in GenderKey]: string };

// // const styles: Style = {
// //   gender: "bg-yellow/10!",
// //   female: "bg-pink/10!",
// //   male: "bg-blue/10!",
// // };

// type Data = {
//   [key: string]: boolean;
// };

// type RadioGroupBtnProps = {
//   onChange?: (val: string | boolean) => void;
//   data: Data[];
//   filterValue?: string | boolean | null;
//   reset?: () => void;
//   variant?: "icon" | "text";
// };

// export const RadioGroupBtn = ({
//   filterValue,
//   data,
//   onChange,
//   reset,
//   variant = "text",
// }: RadioGroupBtnProps) => {
//   return (
//     <RadioGroup.Root
//       className="flex h-10.5 gap-2"
//       value={String(filterValue)}
//       onValueChange={(val) => onChange?.(val)}
//     >
//       {data.map((option, i) => {
//         const key = Object.keys(option);

//         return (
//           <RadioGroup.Item
//             key={i}
//             value={key[0]}
//             className={clsx(
//               // styles[label as GenderKey],

//               filterValue === option[key[0]] && "bg-yellow text-white",
//               "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 tablet-l:p-3 flex cursor-pointer items-center bg-white p-1.5 font-normal text-black capitalize transition-all duration-300 hover:shadow-lg",
//             )}
//           >
//             {variant === "text" && key[0]}

//             {/* {variant === "icon" && (
//             <Icon name={label} className="desktop-l:size-6 size-5" />
//           )} */}

//             {filterValue === option[key[0]] && (
//               <Icon
//                 name="close"
//                 className="ml-1.5 size-4.5 stroke-white"
//                 onClick={reset}
//               />
//             )}
//           </RadioGroup.Item>
//         );
//       })}
//     </RadioGroup.Root>
//   );
// };
////////////////////////////////2 version
import clsx from "clsx";
import { RadioGroup } from "radix-ui";
import { Icon } from "./Icon";

type Option = { filter: string; label: string; value: boolean };

type RadioGroupBtnProps = {
  onChange?: (val: string | boolean) => void;
  data: Option[];
  filterValue?: string | boolean | null;
  reset: () => void;
  variant?: "icon" | "text";
};

export const RadioGroupBtn = ({
  // filterValue,
  data,
  onChange,
  reset,
  variant = "text",
}: RadioGroupBtnProps) => {
  return (
    <RadioGroup.Root
      className="flex flex-wrap gap-2.5"
      // value={String(filterValue)}
      onValueChange={(val) => onChange?.(val)}
    >
      {data.map((option) => {
        // const key = Object.keys(option);

        return (
          <RadioGroup.Item
            key={option?.label}
            value={option?.label}
            className={clsx(
              // styles[label as GenderKey],

              // filterValue === option[key[0]] && "bg-yellow text-white",
              "text-ms desktop-l:text-m rounded-ms desktop-l:p-3.5 tablet-l:p-3 flex cursor-pointer items-center bg-white p-1.5 font-normal text-black capitalize transition-all duration-300 hover:shadow-lg",
            )}
          >
            {variant === "text" && option.label}

            {/* {variant === "icon" && (
            <Icon name={label} className="desktop-l:size-6 size-5" />
          )} */}

            {/* {filterValue === option[key[0]] && */}
            <Icon
              name="close"
              className="ml-1.5 size-4.5 stroke-white"
              onClick={reset}
            />
          </RadioGroup.Item>
        );
      })}
    </RadioGroup.Root>
  );
};
