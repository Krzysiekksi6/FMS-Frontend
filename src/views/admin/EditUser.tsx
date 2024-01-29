import { useState, useEffect, ChangeEvent } from "react";
import { useSelector } from "react-redux";
import {
  selectUserRoles,
  selectCurrentToken,
} from "src/components/features/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import axios from "src/api/axios";

import { FormItemWrapper } from "src/views/UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Input } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

interface FormData {
  firstname: string;
  lastname: string;
  login: string;
}

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const roles = useSelector(selectUserRoles);
  const token = useSelector(selectCurrentToken);
  const [formData, setFormData] = useState<FormData>({
    firstname: "",
    lastname: "",
    login: "",
  });

  const fetchUserData = async () => {
    try {
      const response = await axios.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Roles: JSON.stringify(roles),
        },
      });
      const { firstname, lastname, username } = response.data;
      setFormData({ firstname: firstname, lastname, login: username });
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const onSubmitHandler = async () => {
    const response = await axios.put(`/users/${id}/edit`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        Roles: JSON.stringify(roles),
      },
    });
    console.log("Updated user data:", response.data);
    fetchUserData();
  };

  return (
    <FormItemWrapper>
      {roles?.includes("Admin") ? (
        <>
          <Title>Edytuj dane użytkownika</Title>
          <Label>Imię:</Label>
          <Input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={(e) => handleInputChange(e, "firstname")}
          />
          <Label>Nazwisko:</Label>
          <Input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={(e) => handleInputChange(e, "lastname")}
          />
          <Label>Login:</Label>
          <Input
            type="text"
            name="login"
            value={formData.login}
            onChange={(e) => handleInputChange(e, "login")}
          />
          <Button type="button" onClick={() => onSubmitHandler()}>
            Potwierdź
          </Button>
        </>
      ) : (
        <p>Brak uprawnień</p>
      )}
    </FormItemWrapper>
  );
};

export default EditUser;
