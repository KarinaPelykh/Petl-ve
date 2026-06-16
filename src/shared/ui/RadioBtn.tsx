import { RadioGroup } from "radix-ui";

type RadioBtnProps = {
  value: string;
  name: string;
};

export const RadioBtn = ({ value, name }: RadioBtnProps) => {
  return (
    <>
      <RadioGroup.Item value={value} id={name}></RadioGroup.Item>
      <label htmlFor={name}>{name}</label>
    </>
  );
};
