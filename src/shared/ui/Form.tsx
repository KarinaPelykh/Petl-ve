import {
  createContext,
  useContext,
  type ComponentProps,
  type ElementType,
} from "react";

type FormItemsProps<T extends ElementType> = {
  props: ComponentProps<T>;
};

const FormContext = createContext(null);

// eslint-disable-next-line react-refresh/only-export-components
export const useFormContext = () => {
  const form = useContext(FormContext);

  if (!form) {
    throw new Error("useFormContext must be used in form");
  }
  return form;
};

export const Form = ({ props }: FormItemsProps<"form">) => {
  const value = useFormContext();
  return (
    <FormContext.Provider value={value}>
      <form className="bg-white rounded-ms flex my-auto" {...props} />
    </FormContext.Provider>
  );
};

export const FromField = ({ props }: FormItemsProps<"div">) => {
  return <div {...props} />;
};

export const Label = ({ props }: FormItemsProps<"label">) => {
  return <label {...props} />;
};

export const Input = ({ props }: FormItemsProps<"input">) => {
  return (
    <input
      className="p-3 border border-black/50 placeholder:text-black/50 rounded-ms"
      {...props}
    />
  );
};

export const MessageText = () => {
  return <p></p>;
};
