import { Link } from "react-router";
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

export const RegistrationForm = () => {
  return (
    <Form className="py-6.75 tablet-l:rounded-m tablet-l:py-7.5 tablet-l:px-35 desktop-l:px-21 desktop-l:py-19.25  desktop-l:w-1/2">
      <Heading className="tablet-l:text-5xl tablet-l:mb-4" as="h1">
        Register
      </Heading>
      <p className="text-ms mb-5 tablet-l:text-xl  tablet-l:mb-8 desktop-l:mb-8">
        Thank you for your interest in our platform.
      </p>
      <FormField name="name">
        <Label htmlFor="name" />
        <Input type="text" placeholder="Name" />
        <MessageText />
      </FormField>
      <FormField name="email">
        <Label htmlFor="email" />
        <Input type="text" placeholder="Email" />
        <MessageText />
      </FormField>
      <FormField name="password">
        <Label htmlFor="password" />
        <PasswordInput placeholder="Password" />
        <MessageText />
      </FormField>
      <FormField name="confirmPassword" className="mb-6 tablet-l:mb-8">
        <Label htmlFor="confirmPassword" />
        <PasswordInput placeholder="Confirm password" />
        <MessageText />
      </FormField>
      <Button className="bg-yellow w-full text-white uppercase  mb-3  desktop-l:py-4 text-ms">
        Registration
      </Button>
      <p className="text-black/50 text-s text-center  tablet-l:text-ms">
        Already have an account?
        <Link className="text-yellow underline cursor-pointer" to="/login">
          Login
        </Link>
      </p>
    </Form>
  );
};
