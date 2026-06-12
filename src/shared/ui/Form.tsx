import clsx from "clsx";
import { createContext, useContext, useMemo, type ComponentProps } from "react";

type FormItemsProps = {
  className?: string;
  name: string;
};

type FormContextProps = {
  name: string;
};

const FormContext = createContext<null | FormContextProps>(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const form = useContext(FormContext);

  if (!form) {
    throw new Error("useFormContext must be used inside FromField");
  }
  return form;
};

export const Form = ({ className, ...props }: ComponentProps<"form">) => {
  return (
    <form
      className={clsx(
        "rounded-ms my-auto flex flex-col bg-white px-5 py-7",
        className,
      )}
      {...props}
    />
  );
};

export const FormField = ({
  name,
  children,
  className,
  ...props
}: FormItemsProps & ComponentProps<"div">) => {
  const value = useMemo(() => ({ name }), [name]);

  return (
    <FormContext.Provider value={value}>
      <div {...props} className={clsx("tablet-l:mb-4 mb-2.5", className)}>
        {children}
      </div>
    </FormContext.Provider>
  );
};

export const ItemLabel = ({ ...props }: ComponentProps<"div">) => {
  return <div {...props} />;
};

export const Label = ({ ...props }: ComponentProps<"label">) => {
  return <label {...props} />;
};

export const Input = ({
  onChange,
  className,
  ...props
}: ComponentProps<"input">) => {
  const { name } = useFormContext();
  return (
    <input
      {...props}
      name={name}
      onChange={onChange}
      className={clsx(
        "desktop-l:p-4 text-ms rounded-ms h-10.5 w-full border border-black/50 p-3 text-black/50 shadow-lg outline-none placeholder:text-black/50 placeholder:capitalize",
        className,
      )}
    />
  );
};

export const MessageText = () => {
  // const { name } = useFormContext();

  return <p></p>;
};
