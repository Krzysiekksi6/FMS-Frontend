import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios from "src/api/axios";
import { FormItemWrapper } from "src/views/UnauthenticatedApp/UnauthenticatedApp.styles";
import { Title } from "src/components/atoms/Title/Title.styles";
import { Label } from "src/components/atoms/Label/Label.styles";
import { Input, Select } from "src/components/atoms/Input/Input.styles";
import { Button } from "src/components/atoms/Button/Button.styles";

interface FormData {
  name: string;
  description: string;
  durationWeeks: number;
  caloriesPerDay: number;
  dietCategoryId: number;
}

interface DietCategory {
  id: number;
  name: string;
}

const StepOne = ({ onNext }: any) => {
  const [dietCategories, setDietCategories] = useState<DietCategory[]>([]);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    durationWeeks: 1,
    caloriesPerDay: 2500,
    dietCategoryId: 1,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/diet-categories");
        setDietCategories(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania kategorii", error);
      }
    };
    fetchCategories();
  }, []);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "durationWeeks" ? parseInt(value, 10) : value,
    }));
  };

  const handleDietCategorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setFormData({
      ...formData,
      dietCategoryId: parseInt(e.target.value, 10),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext(formData);
  };

  return (
    <FormItemWrapper onSubmit={handleSubmit}>
      <Title>Stwórz swoją dietę, Krok 1</Title>
      <Label>Nazwa:</Label>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      <Label>Opis:</Label>
      <Input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
      />
      <Label>Czas trwania (w tygodniach):</Label>
      <Input
        type="number"
        name="durationWeeks"
        value={formData.durationWeeks}
        onChange={handleInputChange}
      />
      <Label>Kalorie dziennie:</Label>
      <Input
        type="number"
        name="caloriesPerDay"
        value={formData.caloriesPerDay}
        onChange={handleInputChange}
      />
      <Label>Wybierz kategorię:</Label>
      <Select
        name="productId"
        value={formData.dietCategoryId}
        onChange={handleDietCategorySelect}
      >
        <option value="">Wybierz produkt</option>
        {dietCategories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </Select>
      <Button type="submit">Następny krok</Button>
    </FormItemWrapper>
  );
};

export default StepOne;
