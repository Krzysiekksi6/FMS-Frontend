import { Routes, Route } from "react-router-dom";
import { FormWrapper } from "./UnauthenticatedApp.styles";
import FormField from "src/components/molecules/FormField/FormField";
import { ButtonWrapper } from "./UnauthenticatedApp.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
const UnauthenticatedApp = () => {
  return (
    <>
    <FormWrapper>
      <Title>Logowanie</Title>
      <FormField label="Login" name="login" id="login" />
      <FormField label="Hasło" name="password" id="password" type="password" />
      <ButtonWrapper>
        <Button type="submit">Załóż konto</Button>
        <Button type="submit">Zaloguj się</Button>
      </ButtonWrapper>
    </FormWrapper>
    </>
  );
};

export default UnauthenticatedApp;
