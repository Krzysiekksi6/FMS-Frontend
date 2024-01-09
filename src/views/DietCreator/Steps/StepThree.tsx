import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "src/api/axios";

const StepThree = ({ data }) => {
  const [weeklyData, setWeeklyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("/weeklyDiets", {
          weeklyDietIds: data.weeklyDietIds,
        });
        setWeeklyData(response.data);
      } catch (error) {
        console.error("Błąd podczas pobierania danych z API", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>datas</h1>
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
  );
};

export default StepThree;
