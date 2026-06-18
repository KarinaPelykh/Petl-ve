import { Link, useNavigate } from "react-router";
import { Button } from "../../../shared/ui/Button";
import {
  Form,
  FormField,
  Input,
  Label,
  MessageText,
} from "../../../shared/ui/Form";
import { Heading } from "../../../shared/ui/Heading";
import { PasswordInput } from "../../../shared/ui/PasswordInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { useForm } from "react-hook-form";
import { signupSchema, type Signup } from "../model/contract";
import { signup } from "../../../shared/api/redux/user/operations";

const defaultValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const RegistrationForm = () => {
  const form = useForm<Signup>({
    defaultValues,
    resolver: zodResolver(signupSchema),
  });

  const { register, handleSubmit, reset } = form;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = ({ name, email, confirmPassword }: Signup) => {
    try {
      dispatch(signup({ name, email, password: confirmPassword }));
      reset();
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      form={form}
      onSubmit={handleSubmit(onSubmit)}
      className="tablet-l:rounded-m tablet-l:py-7.5 tablet-l:px-35 desktop-l:px-21 desktop-l:py-19.25 desktop-l:w-1/2 py-6.75"
    >
      <Heading className="tablet-l:text-5xl tablet-l:mb-4" as="h1">
        Register
      </Heading>
      <p className="text-ms tablet-l:text-xl tablet-l:mb-8 desktop-l:mb-8 mb-5">
        Thank you for your interest in our platform.
      </p>
      <FormField name="name">
        <Label htmlFor="name" />
        <Input type="text" placeholder="Name" {...register("name")} />
        <MessageText />
      </FormField>
      <FormField name="email">
        <Label htmlFor="email" />
        <Input type="text" placeholder="Email" {...register("email")} />
        <MessageText />
      </FormField>
      <FormField name="password">
        <Label htmlFor="password" />
        <PasswordInput placeholder="Password" {...register("password")} />
        <MessageText />
      </FormField>
      <FormField name="confirmPassword" className="tablet-l:mb-8 mb-6">
        <Label htmlFor="confirmPassword" />
        <PasswordInput
          placeholder="Confirm password"
          {...register("confirmPassword")}
        />
        <MessageText />
      </FormField>
      <Button
        type="submit"
        variant="primary"
        className="desktop-l:py-4 text-ms mb-3 py-3 uppercase"
      >
        Registration
      </Button>
      <p className="text-s tablet-l:text-ms text-center text-black/50">
        Already have an account?
        <Link className="text-yellow cursor-pointer underline" to="/login">
          Login
        </Link>
      </p>
    </Form>
  );
};
