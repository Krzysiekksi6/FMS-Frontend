import React, { createContext, useContext, useState } from "react";

const MultiStepFormContext = createContext({});

export const MultiStepFormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [weeklyIds, setWeeklyIds] = useState([]);
  const [dietId, setDietId] = useState(0);

  const contextValue = {
    currentStep,
    setCurrentStep,
    weeklyIds,
    setWeeklyIds,
    dietId,
    setDietId,
  };

  return (
    <MultiStepFormContext.Provider value={contextValue}>
      {children}
    </MultiStepFormContext.Provider>
  );
};

export const useMultiStepForm = () => {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error(
      "useMultiStepForm must be used within a MultiStepFormProvider"
    );
  }

  return context;
};
