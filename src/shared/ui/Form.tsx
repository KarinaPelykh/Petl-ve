import clsx from "clsx";
import { createContext, useContext, useMemo, type ComponentProps } from "react";
import {
  FormProvider,
  type FieldValues,
  type UseFormReturn,
} from "react-hook-form";

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

export const Form = <T extends FieldValues>({
  form,
  className,
  ...props
}: { form: UseFormReturn<T> } & ComponentProps<"form">) => {
  return (
    <FormProvider {...form}>
      <form
        className={clsx(
          "rounded-ms my-auto flex flex-col bg-white px-5 py-7",
          className,
        )}
        {...props}
      />
    </FormProvider>
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
  // const { errors } = useFormState();

  // const message = errors[name]?.message as string;
  return (
    <input
      {...props}
      name={name}
      onChange={onChange}
      className={clsx(
        "desktop-l:p-4 text-ms rounded-ms h-10.5 w-full border border-black/50 p-3 text-black/80 shadow-lg outline-none placeholder:text-black/50 placeholder:capitalize",
        className,
        // message && "border-red",
        // isValid && "border-green",
      )}
    />
  );
};

export const MessageText = () => {
  // const { name } = useFormContext();
  // const { errors  } = useFormState();

  // const message = errors[name]?.message as string;
  return <p className={clsx("text-red text-s mt-1 px-4")}>{}</p>;
};
