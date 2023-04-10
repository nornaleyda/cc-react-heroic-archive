import { createContext, useContext, useRef, useState } from "react";
import axios from "axios";
import { useToggle } from "../hooks/useToggle";

const CharsContext = createContext();

export function CharsContextProvider({ children }) {
  const sortingOptions = ["A-Z", "INT", "STR", "SPD", "DUR", "PWR", "CMB"];

  const [allCharacters, setAllCharacters] = useState(
    JSON.parse(localStorage.getItem("heroic-archive")) ?? []
  );
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(allCharacters);

  // SORTING HOOKS CONTEXT
  const anchorRef = useRef(null);
  const [openPopper, togglePopper] = useToggle(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortingMethod, setSortingMethod] = useState({
    sort: sortingOptions[selectedIndex],
    reverseOrder: false,
  });

  // Retrieve all characters from API
  const retrieveCharacters = async () => {
    try {
      await axios
        .get("https://akabab.github.io/superhero-api/api/all.json")
        .then((response) => {
          const data = response.data;
          setAllCharacters(data);

          // Store the full API data in local storage
          localStorage.setItem("heroic-archive", JSON.stringify(data));

          // Filter the data based on user's input
          searchInput !== ""
            ? setFilteredResults(
                data.filter((obj) => {
                  return obj.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase());
                })
              )
            : setFilteredResults(data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  // Handle user's input
  const handleSearchInput = (keyword) => {
    setSearchInput(keyword);
    if (keyword !== "") {
      const filteredData = allCharacters.filter((char) => {
        return char.name.toLowerCase().includes(keyword.toLowerCase());
      });
      setFilteredResults(filteredData);
    }
  };

  // SORTING CONTEXT
  const handleSortButtonClick = () => {
    setSortingMethod({
      ...sortingMethod,
      reverseOrder: !sortingMethod.reverseOrder,
    });
  };
  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    togglePopper();
    setSortingMethod({
      sort: sortingOptions[index],
      reverseOrder: false,
    });
  };
  const handleClosePopper = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    togglePopper();
  };

  const contextValue = {
    anchorRef,
    filteredResults,
    handleClosePopper,
    handleMenuItemClick,
    handleSearchInput,
    handleSortButtonClick,
    openPopper,
    retrieveCharacters,
    searchInput,
    selectedIndex,
    sortingMethod,
    sortingOptions,
    togglePopper,
  };

  return (
    <CharsContext.Provider value={contextValue}>
      {children}
    </CharsContext.Provider>
  );
}

export function useCharsContext() {
  return useContext(CharsContext);
}
