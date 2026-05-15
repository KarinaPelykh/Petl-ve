import { Link } from "react-router";
import { Button } from "../../../shared/ui/Button";
import {
  Form,
  FromField,
  Input,
  Label,
  MessageText,
} from "../../../shared/ui/Form";
import { Heading } from "../../../shared/ui/Heading";

export const LoginForm = () => {
  return (
    <Form className="py-15 tablet-l:rounded-m tablet-l:py-17.75 tablet-l:px-35 desktop-l:px-21 desktop-l:py-29.5">
      <Heading className="tablet-l:text-5xl tablet-l:mb-4" as="h1">
        Log in
      </Heading>
      <p className="text-ms mb-6 tablet-l:text-m desktop-l:mb-8">
        Welcome! Please enter your credentials to login to the platform:
      </p>
      <FromField name="email">
        <Label htmlFor="email" />
        <Input type="text" placeholder="Email" />
        <MessageText />
      </FromField>
      <FromField name="password">
        <Label htmlFor="email" />
        <Input type="password" placeholder="Password" />
        <MessageText />
      </FromField>
      <Button className="bg-yellow w-full text-white uppercase mb-3 tablet-l:mt-16 desktop-l:py-4">
        Log In
      </Button>
      <p className="text-black/50 text-s text-center  tablet-l:text-ms">
        Don’t have an account?{" "}
        <Link className="text-yellow underline cursor-pointer" to="/register">
          Register
        </Link>
      </p>
    </Form>
  );
};
