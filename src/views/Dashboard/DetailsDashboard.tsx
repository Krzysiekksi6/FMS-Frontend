import { useSelector } from "react-redux";
import { selectUserDetails } from "src/components/features/auth/authSlice";
import { Wrapper } from "../Root/Root.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
import { Link } from "react-router-dom";

const DetailsDashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  return (
    <Wrapper>
      <Title>Szczegóły użytwkonika</Title>
      {userDetails ? (
        <>
          <ul>
            <li>BMI: {userDetails.bmi}</li>
            <li>BMR: {userDetails.bmr}</li>
            <li>Wiek: {userDetails.age}</li>
            <li>Waga: {userDetails.weight}</li>
            <li>Waga: {userDetails.height}</li>
            <li>Waga: {userDetails.chestCircumference}</li>
            <li>Waga: {userDetails.waistCircumference}</li>
            <li>Waga: {userDetails.hipCircumference}</li>
            <li>Waga: {userDetails.armCircumference}</li>
            <li>Waga: {userDetails.thighCircumference}</li>
            <li>Waga: {userDetails.calfCircumference}</li>
          </ul>
          <Button>
            <Link to={'edit'} state={{...userDetails}}>Edytuj</Link>
          </Button>
        </>
      ) : (
        <p>brak danych</p>
      )}
    </Wrapper>
  );
};

export default DetailsDashboard;
