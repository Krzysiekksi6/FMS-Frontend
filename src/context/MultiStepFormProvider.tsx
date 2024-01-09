import React, { createContext, useContext, useState } from "react";

const MultiStepFormContext = createContext();

export const MultiStepFormProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);

  const contextValue = {
    currentStep,
    setCurrentStep,
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
    throw new Error("useMultiStepForm must be used within a MultiStepFormProvider");
  }

  return context;
};
