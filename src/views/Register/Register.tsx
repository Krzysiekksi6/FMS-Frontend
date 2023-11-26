import axios from "src/api/axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import FormField from "src/components/molecules/FormField/FormField";
import { ButtonWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

const REGISTER_URL = "/register";

type Inputs = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

const Register = () => {
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const { firstname, lastname, username, password } = data;
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          firstname,
          lastname,
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Rejestracja</Title>
      <FormField
        label="Imię"
        name="firstname"
        id="firstname"
        {...register("firstname", { required: true })}
      />
      {errors.firstname && <span>Imię jest wymagane</span>}
      <FormField
        label="Nazwisko"
        name="lastname"
        id="lastname"
        {...register("lastname", { required: true })}
      />
      {errors.lastname && <span>Nazwisko jest wymagane</span>}
      <FormField
        label="Login"
        name="username"
        id="username"
        {...register("username", { required: true })}
      />
      {errors.username && <span>Login jest wymagany</span>}
      <FormField
        label="Hasło"
        name="password"
        id="password"
        type="password"
        {...register("password", { required: true })}
      />
      {errors.password && <span>Hasło jest wymagane</span>}
      <Button type="submit">Zarejestruj się</Button>
      <ButtonWrapper></ButtonWrapper>
    </FormWrapper>
  );
};

export default Register;
