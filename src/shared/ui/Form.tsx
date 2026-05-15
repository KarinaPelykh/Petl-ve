import clsx from "clsx";
import {
  createContext,
  useContext,
  type ComponentProps,
  type ElementType,
  type ReactNode,
} from "react";

type FormItemsProps<T extends ElementType> = {
  props?: ComponentProps<T>;
  children?: ReactNode;
  className?: string;
  name?: string;
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

export const Form = ({
  className,
  children,
  props,
}: FormItemsProps<"form">) => {
  return (
    <form
      className={clsx(
        "bg-white rounded-ms flex my-auto flex-col py-7 px-5",
        className,
      )}
      {...props}
    >
      {children}
    </form>
  );
};

export const FromField = ({
  name = "",
  children,
  ...props
}: FormItemsProps<"div">) => {
  // const value = useFormContext();

  return (
    <FormContext.Provider value={{ name }}>
      <div className="mb-2.5 last:mb-0 tablet-l:mb-4s" {...props}>
        {children}
      </div>
    </FormContext.Provider>
  );
};

export const Label = ({ children, ...props }: ComponentProps<"label">) => {
  return <label {...props}>{children}</label>;
};

export const Input = ({ ...props }: ComponentProps<"input">) => {
  return (
    <input
      className="p-3 desktop-l:p-4 border border-black/50 placeholder:text-black/50 rounded-ms w-full outline-none text-black/50"
      {...props}
    />
  );
};

export const MessageText = () => {
  return <p></p>;
};
