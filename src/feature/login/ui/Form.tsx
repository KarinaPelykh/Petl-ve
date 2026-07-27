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
import { useForm } from "react-hook-form";
import { signinSchema, type Signin } from "../model/contract";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../shared/hooks/reduxHooks";
import { signin } from "../../../shared/api/redux/user/operations";

const defaultValues = {
  email: "",
  password: "",
};

export const LoginForm = () => {
  const form = useForm<Signin>({
    defaultValues,
    resolver: zodResolver(signinSchema),
  });

  const { register, handleSubmit, reset } = form;
  const dispatch = useAppDispatch();
  const navigation = useNavigate();

  const submitForm = (data: Signin) => {
    try {
      dispatch(signin(data)).unwrap();
      reset();
      navigation("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form
      onSubmit={handleSubmit(submitForm)}
      form={form}
      className="tablet-l:rounded-m tablet-l:py-17.75 tablet-l:px-35 desktop-l:px-21 desktop-l:py-29.5 desktop-l:w-1/2 py-15"
    >
      <Heading className="tablet-l:text-5xl tablet-l:mb-4" as="h1">
        Log in
      </Heading>
      <p className="text-ms tablet-l:text-m desktop-l:mb-8 mb-6">
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <FormField name="email">
        <Label htmlFor="email" />
        <Input type="text" placeholder="Email" {...register("email")} />
        <MessageText />
      </FormField>
      <FormField name="password">
        <Label htmlFor="email" />
        <PasswordInput placeholder="Password" {...register("password")} />
        <MessageText />
      </FormField>
      <Button
        type="submit"
        variant="primary"
        className="tablet-l:mt-16 text-ms desktop-l:py-4 mb-3 py-3 uppercase"
      >
        Log In
      </Button>
      <p className="text-s tablet-l:text-ms text-center text-black/50">
        Don’t have an account?
        <Link className="text-yellow cursor-pointer underline" to="/register">
          Register
        </Link>
      </p>
    </Form>
  );
};
