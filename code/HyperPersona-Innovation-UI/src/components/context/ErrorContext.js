import React, { createContext, useContext, useState, useEffect } from "react";
import { errorManager } from "../../util/ErrorManager";

// Create context
const ErrorContext = createContext();

// Custom hook for using ErrorContext
export const useErrorContext = () => useContext(ErrorContext);

export const ErrorProvider = ({ children }) => {
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    const handleNetworkError = (status) => {
      console.error("Network Error:", status);
      setNetworkError(status);
    };

    errorManager.on("networkError", handleNetworkError);

    return () => {
      errorManager.off("networkError", handleNetworkError); // Cleanup on unmount
    };
  }, []);

  return (
    <ErrorContext.Provider value={{ networkError, setNetworkError }}>
      {children}
    </ErrorContext.Provider>
  );
};
