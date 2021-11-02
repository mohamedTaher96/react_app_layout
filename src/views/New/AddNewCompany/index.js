import React, { useState } from "react";
import { Configure } from "./Components/Configure";
import { AddCompany } from "./Components/AddCompany";
import { Done } from "./Components/Done";

export const AddNewCompany = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    companyName: "",
    registryNumber: "",
    country: "",
    city: "",
    industries: "",
    financial: "",
    currency: "",
    startDate: "",
    taxRate: "",
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  switch (step) {
    case 1:
      return (
        <Configure
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <AddCompany
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    default:
      return <Done />;
  }
};
