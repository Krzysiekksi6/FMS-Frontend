import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setCredentials } from "src/components/features/auth/authSlice";
import { useLoginMutation } from "src/components/features/auth/authApiSlice";

import FormField from "src/components/molecules/FormField/FormField";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { ButtonWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const { username, password } = data;
    try {
      const userData = await login({ username, password }).unwrap();
      dispatch(setCredentials({ ...userData, username }));
      console.log(userData)
      navigate("/auth");
    } catch (error) {
      if (!error?.response) {
        const errMessage = "No server response";
        console.log(errMessage);
      } else if (error.response?.status === 400) {
        console.log("Bad Request");
      } else if (error.response?.status === 401) {
        console.log("UnAuth");
      } else {
        console.log("Log failed");
      }
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <Title>Logowanie</Title>
      <FormField
        label="Login"
        name="login"
        id="login"
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
      <ButtonWrapper>
        <Button type="button">
          <Link to={"/register"}>Załóż konto</Link>
        </Button>
        <Button type="submit">Zaloguj się</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default Login;
