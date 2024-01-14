import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FormItemWrapper } from "../UnauthenticatedApp/UnauthenticatedApp.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Select } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";
import axios from "src/api/axios";
import { MealType } from "src/enum/MealType";
import { Title } from "src/components/atoms/Title/Title.styles";

const DietDetails = () => {
  const [dishes, setDishes] = useState([]);
  const [selectedMeals, setSelectedMeals] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDishes = async () => {
      try {
        const response = await axios.get("/dish");
        setDishes(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania dań z API");
      }
    };
    fetchDishes();
  }, []);

  const handleSelectDish = (mealType, dishId) => {
    setSelectedMeals((prev) => ({
      ...prev,
      [mealType]: {
        dailyDietId: parseInt(id),
        mealType: mealType,
        dishIds: [dishId],
      },
    }));
  };

  const handleSaveMeals = async () => {
    const promises = Object.values(MealType).map((mealType) => {
      const selectedMeal = selectedMeals[mealType];

      // Sprawdź, czy dla danego posiłku są wybrane dania
      if (
        selectedMeal &&
        selectedMeal.dishIds &&
        selectedMeal.dishIds.length > 0
      ) {
        return axios.post("/add-meal-to-day", selectedMeal);
      } else {
        // Jeśli nic nie zostało wybrane, zwróć pustego resolved Promise
        return Promise.resolve();
      }
    });

    try {
      console.log("Before API request");
      console.log(promises);
      await Promise.all(promises);
      console.log("After API request");
    } catch (error) {
      console.error(
        "Błąd podczas zapisywania wszystkich posiłków z API",
        error
      );
    }
  };

  const handleGoBack = () => {
    navigate("/auth/createDiet");
  };

  return (
    <div>
      <FormItemWrapper>
        <Title>Szczegóły dnia o id: {id}</Title>
        {Object.values(MealType).map((mealType) => (
          <FormItemWrapper key={mealType}>
            <Label>{mealType}</Label>
            <Select
              onChange={(e) =>
                handleSelectDish(mealType, parseInt(e.target.value))
              }
            >
              <option value="">Select Dish</option>
              {dishes.map((dish) => (
                <option key={dish.id} value={dish.id}>
                  {dish.name}
                </option>
              ))}
            </Select>
          </FormItemWrapper>
        ))}
        <Button onClick={handleGoBack}>Wróć</Button>
        <Button type="button" onClick={handleSaveMeals}>
          Zapisz posiłki
        </Button>
      </FormItemWrapper>
    </div>
  );
};

export default DietDetails;
