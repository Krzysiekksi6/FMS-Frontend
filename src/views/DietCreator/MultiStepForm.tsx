import { useState, useEffect } from "react";
import axios from "src/api/axios";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import { useMultiStepForm } from "src/context/MultiStepFormProvider";

const MultiStepForm = () => {
  const { currentStep, setCurrentStep, weeklyIds, setWeeklyIds, setDietId } =
    useMultiStepForm();
  const [dietData, setDietData] = useState(null);
  const [weeklyDietData, setWeeklyDietData] = useState(null);
  const [caloriesPerDay, setCaloriesPerDay] = useState(0);

  const handleNext = async (data) => {
    try {
      const response = await axios.post("/diet", data);
      setDietData(response.data);
      console.log("RESPONSE DATA OF DIET", response.data);

      setDietId(response.data.createdDiet.id);

      if (response.data.createdDiet.caloriesPerDay) {
        setCaloriesPerDay(response.data.createdDiet.caloriesPerDay);
      }

      if (response.data.savedWeeklyDiet) {
        const weeklyDietIds = response.data.savedWeeklyDiet.map(
          (week) => week.id
        );
        setWeeklyIds(weeklyDietIds);
      }

      setCurrentStep((prevState) => prevState + 1);
      console.log(currentStep);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFinalSubmit = (finalData) => {
    setWeeklyDietData(finalData);
    setCurrentStep((prevState) => prevState + 1);
  };

  return (
    <div>
      {currentStep === 1 && <StepOne onNext={handleNext} />}
      {currentStep === 2 && (
        <StepTwo
          weeklyDietIds={weeklyIds} // Dodaj zabezpieczenie przed dostępem do null
          caloriesPerDay={caloriesPerDay} // Dodaj zabezpieczenie przed dostępem do null
          onNext={handleFinalSubmit}
        />
      )}
      {currentStep > 2 && <StepThree />}
    </div>
  );
};

export default MultiStepForm;
