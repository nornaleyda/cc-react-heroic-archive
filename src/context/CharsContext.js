import { createContext, useContext, useState } from "react";
import axios from "axios";

const CharsContext = createContext();

export function CharsContextProvider({ children }) {
  const [charList, setCharList] = useState([]);

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

  const contextValue = { charList, retrieveChars };

  return (
    <CharsContext.Provider value={contextValue}>
      {children}
    </CharsContext.Provider>
  );
}

export function useCharsContext() {
  return useContext(CharsContext);
}
