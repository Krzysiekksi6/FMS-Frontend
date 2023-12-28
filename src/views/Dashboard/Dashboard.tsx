import { useSelector } from "react-redux";
import {
  selectUserDetails,
  selectUserId,
} from "src/components/features/auth/authSlice";
import {
  UserDetailsWrapper,
  UserDetailSection,
  EditLink,
  Wrapper,
} from "./Dashboard.styles";

import MainTemplate from "src/templates/MainTemplate/MainTemplate";
import { AverageBMI } from "src/components/atoms/AverageBMI/AverageBMI.styles";
import { ArticleWrapper } from "src/templates/NewsSection/NewsSection.style";
import { AverageBMR } from "src/components/atoms/AverageBMR/AverageBMR.styles";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  const userId = useSelector(selectUserId);
  return (
    <MainTemplate>
      <UserDetailsWrapper>
        {userDetails ? (
          <>
            <Wrapper>
              <UserDetailSection>
                <AverageBMI value={userDetails.bmi}>
                  <p>BMI: </p>
                  <p>{userDetails.bmi}</p>
                </AverageBMI>
                <AverageBMR>
                  <p>BMR:</p>
                  <p>{userDetails.bmr}</p>
                </AverageBMR>
              </UserDetailSection>
              <EditLink to={`/auth/details/${userId}/edit`}>
                Edytuj swoje dane
              </EditLink>
            </Wrapper>
          </>
        ) : (
          <>
            <UserDetailSection>
              <p>Brak danych o użytkowniku</p>
            </UserDetailSection>
            <UserDetailSection>
              <Link to={`/auth/details`}>
                Dodaj szczegóły
              </Link>
            </UserDetailSection>
          </>
        )}
      </UserDetailsWrapper>
    </MainTemplate>
  );
};

export default Dashboard;
