import { useSelector } from "react-redux";
import { selectUserDetails } from "src/components/features/auth/authSlice";
import { Wrapper } from "../Root/Root.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsDashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  const [details, setDetails] = useState(userDetails);
  console.log(details);
  

  useEffect(() => {
    setDetails(userDetails);
  }, [userDetails]);
  return (
    <Wrapper>
      <Title>Szczegóły użytwkonika</Title>
      {details ? (
        <>
          <ul>
            <li>BMI: {details.bmi}</li>
            <li>BMR: {details.bmr}</li>
            <li>Wiek: {details.age}</li>
            <li>Waga: {details.weight}</li>
            <li>Waga: {details.height}</li>
            <li>Waga: {details.chestCircumference}</li>
            <li>Waga: {details.waistCircumference}</li>
            <li>Waga: {details.hipCircumference}</li>
            <li>Waga: {details.armCircumference}</li>
            <li>Waga: {details.thighCircumference}</li>
            <li>Waga: {details.calfCircumference}</li>
          </ul>
          <Button>
            <Link to={"edit"} state={{ ...details }}>
              Edytuj
            </Link>
          </Button>
        </>
      ) : (
        <p>brak danych</p>
      )}
    </Wrapper>
  );
};

export default DetailsDashboard;
