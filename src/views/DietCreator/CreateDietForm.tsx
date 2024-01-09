import React, { useState, useEffect } from "react";
import axios from "src/api/axios";

const CreateDietForm = () => {
  const [dietCategories, setDietCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    durationWeeks: 1,
    caloriesPerDay: 0,
    dietCategoryId: 1,
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/diet-categories");
        setDietCategories(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania kategorii z API", error);
      }
    };

    fetchCategories();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "durationWeeks" ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Wyślij dane na backend
      // Pamiętaj, żeby dostosować endpoint do swoich potrzeb
      const response = await axios.post("/diet", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Błąd podczas tworzenia diety", error);
    }
  };

  return (
    <div>
      <h2>Stwórz nową dietę</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nazwa:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Opis:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          ></textarea>
        </label>
        <br />
        <label>
          Czas trwania (w tygodniach):
          <input
            type="number"
            name="durationWeeks"
            value={formData.durationWeeks}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Kalorie dziennie:
          <input
            type="number"
            name="caloriesPerDay"
            value={formData.caloriesPerDay}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Kategoria diety:
          <select
            name="dietCategoryId"
            value={formData.dietCategoryId}
            onChange={handleInputChange}
            required
          >
            {dietCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <button type="submit">Stwórz dietę</button>
      </form>
    </div>
  );
};

export default CreateDietForm;
