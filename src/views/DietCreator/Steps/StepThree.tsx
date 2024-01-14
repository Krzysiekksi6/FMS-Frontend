import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "src/api/axios";
import { Button } from "src/components/atoms/Button/Button.styles";
import { useMultiStepForm } from "src/context/MultiStepFormProvider";

import {
  selectUserId,
  selectUserDetails,
  setUserDietId,
} from "src/components/features/auth/authSlice";
import { usePostUserDetailsMutation } from "src/components/features/users/usersApiSlice";

const StepThree = () => {
  const dispatch = useDispatch();
  const [updateDietId, { isLoading }] = usePostUserDetailsMutation();
  const [weeklyData, setWeeklyData] = useState([]);
  const { weeklyIds, setWeeklyIds, dietId } = useMultiStepForm();

  const currentUserId = useSelector(selectUserId);
  const userDetails = useSelector(selectUserDetails);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/weeklyDiets", {
          weeklyDietIds: weeklyIds,
        });
        setWeeklyData(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania danych z API", error);
      }
    };
    fetchData();
  }, []);

  const handleSaveDiet = async () => {
    try {
      const response = await axios.put(`/users/${currentUserId}/updateDietId`, {
        dietId: dietId,
      });

      console.log("RESPONSE", response);
      console.log("RESPONSE", dietId);
      console.log("RESPONSE", currentUserId);

      dispatch(setUserDietId(dietId));

      console.log(response.data); // Dostęp do danych z odpowiedzi
    } catch (error) {
      console.error("Błąd podczas aktualizacji ID diety", error);
    }
  };

  return (
    <div>
      <h1>datas</h1>
      <div>
        {Array.isArray(weeklyData) &&
          weeklyData.map((week) => (
            <div key={week.id}>
              <h3>{week.weekName}</h3>
              <ul>
                {week.dailyDiets.map((dailyDiet) => (
                  <li key={dailyDiet.id}>
                    <p>{dailyDiet.dayOfWeek}</p>
                    <p>{dailyDiet.date}</p>
                    <Link to={`dietDetails/${dailyDiet.id}`}>
                      <button>Przejdź do szczegółów</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
      <Button type="button" onClick={handleSaveDiet}>
        Dodaj dietę
      </Button>
    </div>
  );
};

export default StepThree;
