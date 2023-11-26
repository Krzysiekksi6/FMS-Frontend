import axios from "src/api/axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useAuth from "src/hooks/useAuth";
import { FormWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import FormField from "src/components/molecules/FormField/FormField";
import { ButtonWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
const Login = () => {
  const LOGIN_URL = "/auth";

  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    const username = "Krzysiekksi6";
    const password = "haslo123";
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ username, password, roles, accessToken });
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
        {...register("login", {})}
      />
      {errors.login && <span>Login is required</span>}
      <FormField
        label="Hasło"
        name="password"
        id="password"
        type="password"
        {...register("login", {})}
      />
      {errors.password && <span>Password is required</span>}
      <ButtonWrapper>
        <Button type="button">Załóż konto</Button>
        <Button type="submit">Zaloguj się</Button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default Login;
