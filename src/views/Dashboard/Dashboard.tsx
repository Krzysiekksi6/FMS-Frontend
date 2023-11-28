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
            <p>BMI</p>

            <p>BMR</p>
            <Link to={`/auth/details/${userId}`}>Dodaj szczegóły</Link>

          </>
        ) : (
          <>
            <p>Brak danych o użytkowniku</p>
            <Link to={`/auth/details/${userId}`}>Dodaj szczegóły</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
