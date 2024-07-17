import { useState, useEffect } from "react";

export const useLocalStorage = (key) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error("Error reading localStorage key:", key, error);
      return [];
    }
  });

  const setValue = (value) => {
    try {
      if (!value) {
        setStoredValue([]);
        return
      }
      setStoredValue((prev) => [...prev, value]);
    } catch (error) {
      console.error("Error setting localStorage key:", key, error);
    }
  };
  useEffect(() => {
    localStorage.setItem("country", JSON.stringify(storedValue));
  }, [storedValue]);

  return [storedValue, setValue];
};
