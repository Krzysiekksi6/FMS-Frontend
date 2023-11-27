import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectUserDetails } from "src/components/features/auth/authSlice";

const Dashboard = () => {
  const userDetails = useSelector(selectUserDetails);
  return (
    <div>
      <div>
        {userDetails ? (
          <>
            <p>BMI</p>

            <p>BMR</p>
          </>
        ) : (
          <>
            <p>Brak danych o użytkowniku</p>
            <Link to={''}>Dodaj szczegóły</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
