import { useState } from "react";
import axios from "src/api/axios";
import { FormItemWrapper } from "src/views/UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Input } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

const StepTwo = ({ weeklyDietIds, caloriesPerDay, onNext }) => {
  const [formData, setFormData] = useState({
    weeklyDietIds,
    caloriesPerDay,
    startDate: "2024-01-01",
    totalProtein: 100,
    totalCarbs: 150,
    totalFat: 50,
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    let response;
    try {
      response = await axios.post("/add-day-to-week", {
        ...formData,
        weeklyDietIds, // Identyfikatory tygodni
        totalCalories: caloriesPerDay, // Ustawiaj totalCalories na caloriesPerDay
      });

      console.log(response.data);

      // Przekazuj dane do funkcji onNext
      onNext(formData);
    } catch (error) {
      console.error(error);
    }

  };
  return (
    <FormItemWrapper onSubmit={handleSubmit}>
      <Title>Sczegóły twojej diety, Krok 2</Title>
      <Label>Data rozpoczęcia diety:</Label>
      <Input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleInputChange}
      />

      <Label>Dzienna porcja białka (gram)</Label>
      <Input
        type="number"
        name="totalProtein"
        value={formData.totalProtein}
        onChange={handleInputChange}
      />

      <Label>Dzienna porcja węglowodanów (gram)</Label>
      <Input
        type="number"
        name="totalCarbs"
        value={formData.totalCarbs}
        onChange={handleInputChange}
      />

      <Label>Dzienna porcja tłuszczy (gram)</Label>
      <Input
        type="number"
        name="totalFat"
        value={formData.totalFat}
        onChange={handleInputChange}
      />
      <Button type="submit">Następny krok</Button>
    </FormItemWrapper>
  );
};

export default StepTwo;
