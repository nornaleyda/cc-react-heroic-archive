import { createContext, useContext, useRef, useState } from "react";
import axios from "axios";

const CharsContext = createContext();

export function CharsContextProvider({ children }) {
  const sortingOptions = ["A-Z", "INT", "STR", "SPD", "DUR", "PWR", "CMB"];

  const [allCharacters, setAllCharacters] = useState(
    JSON.parse(localStorage.getItem("heroic-archive")) ?? []
  );
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState(allCharacters);
  const anchorRef = useRef(null);
  const [openPopper, setOpenPopper] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sortingMethod, setSortingMethod] = useState({
    sort: sortingOptions[selectedIndex],
    reverseOrder: false,
  });
  const [COTD, setCOTD] = useState(null);
  const randomIndex = Math.random() * 562;

  // Retrieve all characters
  const retrieveCharacters = async () => {
    try {
      await axios
        .get("https://akabab.github.io/superhero-api/api/all.json")
        .then((response) => {
          const data = response.data;
          if (allCharacters === []) {
            setAllCharacters(data);
            // Store the full API data in local storage
            localStorage.setItem("heroic-archive", JSON.stringify(data));
          }
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

  const handleSortButtonClick = () => {
    setSortingMethod({
      ...sortingMethod,
      reverseOrder: !sortingMethod.reverseOrder,
    });
  };

  const handleTogglePopper = () => {
    setOpenPopper((prevOpen) => !prevOpen);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setOpenPopper(false);
    setSortingMethod({
      sort: sortingOptions[index],
      reverseOrder: false,
    });
  };

  const handleClosePopper = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpenPopper(false);
  };

  const switchSorting = (sortType, sortOrder, data) => {
    switch (sortType) {
      case "INT":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.intelligence - charA.powerstats.intelligence
            : charA.powerstats.intelligence - charB.powerstats.intelligence;
        });
        break;
      case "STR":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.strength - charA.powerstats.strength
            : charA.powerstats.strength - charB.powerstats.strength;
        });
        break;
      case "SPD":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.speed - charA.powerstats.speed
            : charA.powerstats.speed - charB.powerstats.speed;
        });
        break;
      case "DUR":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.durability - charA.powerstats.durability
            : charA.powerstats.durability - charB.powerstats.durability;
        });
        break;
      case "PWR":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.power - charA.powerstats.power
            : charA.powerstats.power - charB.powerstats.power;
        });
        break;
      case "CMB":
        data.sort((charA, charB) => {
          return sortOrder
            ? charB.powerstats.combat - charA.powerstats.combat
            : charA.powerstats.combat - charB.powerstats.combat;
        });
        break;
      default:
        data.sort((charA, charB) => {
          return sortOrder ? charB.id - charA.id : charA.id - charB.id;
        });
    }
    return data;
  };

  const contextValue = {
    allCharacters,
    anchorRef,
    filteredResults,
    handleClosePopper,
    handleMenuItemClick,
    handleSearchInput,
    handleSortButtonClick,
    handleTogglePopper,
    openPopper,
    retrieveCharacters,
    searchInput,
    selectedIndex,
    sortingMethod,
    sortingOptions,
    switchSorting,
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
