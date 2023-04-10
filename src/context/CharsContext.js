import { createContext, useContext, useState } from "react";
import axios from "axios";

const CharsContext = createContext();

export function CharsContextProvider({ children }) {
  const [charList, setCharList] = useState([]);
  const [COTD, setCOTD] = useState(null);
  const randomIndex = Math.random() * 562;

  const retrieveChars = async () => {
    try {
      const response = await axios.get(
        "https://akabab.github.io/superhero-api/api/all.json"
      );
      if (response.data) {
        setCharList(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const retrievesCOTD = async () => {
    try {
      await axios
        .get("https://akabab.github.io/superhero-api/api/all.json")
        .then((response) => {
          const data = response.data;
          const randomChar = data.slice(randomIndex, randomIndex + 1);
          setCOTD(randomChar);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const contextValue = { charList, retrieveChars, COTD, retrievesCOTD };

  return (
    <CharsContext.Provider value={contextValue}>
      {children}
    </CharsContext.Provider>
  );
}

export function useCharsContext() {
  return useContext(CharsContext);
}
