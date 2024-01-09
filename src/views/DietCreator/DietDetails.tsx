import React from "react";
import { useNavigate } from "react-router-dom";

const DietDetails = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    // Użycie obiektu historii do powrotu do poprzedniej strony
    navigate("/auth/createDiet");
  };
  return (
    <div>
      adsdsadsadsaads
      <button onClick={handleGoBack}>Wróć</button>
    </div>
  );
};

export default DietDetails;
