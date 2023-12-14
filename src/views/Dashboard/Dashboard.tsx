import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectUserDetails,
  selectUserId,
} from "src/components/features/auth/authSlice";

import { Wrapper } from "../Root/Root.styles";
import MainTemplate from "src/templates/MainTemplate/MainTemplate";
const Dashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  const userId = useSelector(selectUserId);
  return (
    <MainTemplate>
      <Wrapper>
        {userDetails ? (
          <>
            <p>BMI: {userDetails.bmi}</p>
            <p>BMR: {userDetails.bmr}</p>
            <Link to={`/auth/details/${userId}/edit`}>Edytuj swoje dane</Link>
          </>
        ) : (
          <>
            <p>Brak danych o użytkowniku</p>
            <Link to={`/auth/details`}>Dodaj szczegóły</Link>
          </>
        )}
      </Wrapper>
    </MainTemplate>
  );
};

export default Dashboard;
