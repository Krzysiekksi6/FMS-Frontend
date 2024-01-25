import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "src/api/axios";
import { selectUserDietId } from "src/components/features/auth/authSlice";
import { NewSectionHeader, Wrapper } from "./NewsSection.style";
import {
  ArticleWrapper,
  NoDietWrapper,
} from "./NewsSection.style";
import {
  SecondTitle,
  ThirdTitle,
} from "src/components/atoms/Title/Title.styles";
import { MdSentimentVeryDissatisfied } from "react-icons/md";
import { format } from "date-fns";

const NewsSection = () => {
  const dietId = useSelector(selectUserDietId);
  const [dietData, setDietData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/getDietById/${dietId}`);
        const data = response.data.weeklyDiets;
        setDietData(data);
      } catch (error) {
        console.error("Błąd podczas pobierania diety");
      }
    };
    fetchData();
  }, []);
  const image = null;

  return (
    <Wrapper>
      <NewSectionHeader>Twoja dieta</NewSectionHeader>
      {dietId ? (
        <>
          {dietData.map((week) => (
            <div key={week.id}>
              <SecondTitle>{week.weekName}</SecondTitle>
              {week.dailyDiets.map((dailyDiet) => (
                <ArticleWrapper key={dailyDiet.id}>
                  <ThirdTitle>{dailyDiet.dayOfWeek}</ThirdTitle>
                  <p>Data: {format(new Date(dailyDiet.date), "dd.MM.yyyy")}</p>
                  {dailyDiet.dailyMeals.map((meal) => (
                    <div key={meal.id}>
                      <ThirdTitle>{meal.mealType}</ThirdTitle>
                      {meal.dishes.map((dish) => (
                          <small>{dish.name}</small>
                      ))}
                    </div>
                  ))}
                </ArticleWrapper>
              ))}
            </div>
          ))}
        </>
      ) : (
        <NoDietWrapper>
          <SecondTitle>
            Brak wybranej diety{" "}
            <span>
              <MdSentimentVeryDissatisfied size={26} />
            </span>
          </SecondTitle>
        </NoDietWrapper>
      )}
    </Wrapper>
  );
};

export default NewsSection;
