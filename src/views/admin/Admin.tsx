import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  selectUserRoles,
  selectCurrentToken,
} from "src/components/features/auth/authSlice";
import axios from "src/api/axios";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "../DietCreator/CreateDiet.styles";
import Navigation from "src/components/organisms/Navigation/Navigation";
import SearchBar from "src/components/organisms/SearchBar/SearchBar";
import {
  UsersWrapper,
  UsersList,
  UserItem,
  UserDetails,
  UserActions,
} from "./Admin.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

const Admin = () => {
  const roles = useSelector(selectUserRoles);
  const token = useSelector(selectCurrentToken);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await axios.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Błąd podczas pobierania danych z API", error);
    }
  };

  const handleEditUser = (userId: number) => {
    const id = parseInt(userId);
    navigate(`${id}/edit`);
  };

  const handleDeleteUser = async (userId: number) => {
    console.log(roles);
    const id = parseInt(userId);
    try {
      await axios.delete(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Roles: JSON.stringify(roles),
        },
      });
      fetchData();
    } catch (error) {
      console.error("Błąd podczas usuwania użytkownika", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {roles?.includes("Admin") ? (
        <UsersWrapper>
          <Title>Panel zarządzający użytkownikami</Title>
          <UsersList>
            {users.map((user) => (
              <UserItem key={user.id}>
                <UserDetails>
                  <span>{user.username}</span>
                </UserDetails>
                <UserActions>
                  <Button onClick={() => handleEditUser(user.id)}>
                    Edytuj
                  </Button>
                  <Button onClick={() => handleDeleteUser(user.id)}>
                    Usuń
                  </Button>
                </UserActions>
              </UserItem>
            ))}
          </UsersList>
        </UsersWrapper>
      ) : (
        <p>Brak uprawnień</p>
      )}
    </Wrapper>
  );
};

export default Admin;
