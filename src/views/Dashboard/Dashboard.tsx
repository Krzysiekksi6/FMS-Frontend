import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectUserDetails,
  selectUserId,
} from "src/components/features/auth/authSlice";

const Dashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  const userId = useSelector(selectUserId);
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};

export default Dashboard;
