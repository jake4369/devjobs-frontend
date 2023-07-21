import { createContext, useState, useContext } from "react";

const FormContext = createContext();

export function FormProvider({ children }) {
  const [userSearch, setUserSearch] = useState({
    search: "",
    location: "",
    contract: "",
  });

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  return (
    <FormContext.Provider
      value={{
        userSearch,
        setUserSearch,
        isCheckboxChecked,
        setIsCheckboxChecked,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
