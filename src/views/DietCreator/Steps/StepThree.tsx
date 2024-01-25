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

import { Title } from "src/components/atoms/Title/Title.styles";
import {
  ContentWrapper,
  WeekTitle,
  DietDetalilsWrapper,
  DietDetalilsItem,
  ParagraphDetails,
  WeekName,
  ActionsWrapper,
} from "../CreateDiet.styles";

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
    <>
      {console.log(weeklyData)}
      <ContentWrapper>
        <Title>Plan diety</Title>
        {Array.isArray(weeklyData) &&
          weeklyData.map((week) => (
            <div key={week.id}>
              <WeekTitle>{week.weekName}</WeekTitle>
              <DietDetalilsWrapper>
                {week.dailyDiets.map((dailyDiet) => (
                  <DietDetalilsItem key={dailyDiet.id}>
                    <WeekName>{dailyDiet.dayOfWeek}</WeekName>
                    <p>
                      {new Date(dailyDiet.date).toLocaleDateString("pl-PL")}
                    </p>
                    <ParagraphDetails>
                      Białko: {dailyDiet.totalProtein}
                    </ParagraphDetails>
                    <ParagraphDetails>
                      Tłuszcze: {dailyDiet.totalFat}
                    </ParagraphDetails>
                    <ParagraphDetails>
                      Węglowodany: {dailyDiet.totalCarbs}
                    </ParagraphDetails>
                    <Link to={`dietDetails/${dailyDiet.id}`}>
                      <Button>Przejdź do szczegółów</Button>
                    </Link>
                  </DietDetalilsItem>
                ))}
              </DietDetalilsWrapper>
            </div>
          ))}
      </ContentWrapper>
      <ActionsWrapper>
        <Button isBig type="button" onClick={handleSaveDiet}>
          Zapisz dietę
        </Button>
      </ActionsWrapper>
    </>
  );
};

export default StepThree;
