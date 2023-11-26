import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import FormField from "src/components/molecules/FormField/FormField";
import { ButtonWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const Register = () => {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Rejestracja</Title>
      <FormField
        label="firstname"
        name="firstname"
        id="firstname"
        {...register("firstname", {})}
      />
      <FormField
        label="lastname"
        name="lastname"
        id="lastname"
        {...register("lastname", {})}
      />{" "}
      <FormField
        label="username"
        name="username"
        id="username"
        {...register("username", {})}
      />
      <FormField
        label="password"
        name="password"
        id="password"
        type="password"
        {...register("password", {})}
      />
        <Button type="submit">Zarejestruj się</Button>
      <ButtonWrapper>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default Register;
