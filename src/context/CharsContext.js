import { createContext, useContext, useRef, useState } from "react";
import axios from "axios";
import { useToggle } from "../hooks/useToggle";

const CharsContext = createContext();

export function CharsContextProvider({ children }) {
  const [allCharacters, setAllCharacters] = useState(
    JSON.parse(localStorage.getItem("heroic-archive")) ?? []
  );
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);

  // SORTING HOOKS CONTEXT
  const sortingOptions = ["A-Z", "INT", "STR", "SPD", "DUR", "PWR", "CMB"];
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
        });
    } catch (error) {
      console.error(error);
    }
  };

  // Handle user's input
  const handleSearchInput = (keyword) => {
    setSearchInput(keyword);
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

  // FILTER CONTEXT
  const [raceFilters, setRaceFilters] = useState([]);
  const [filterHuman, toggleFilterHuman] = useToggle(false);
  const [filterMutant, toggleFilterMutant] = useToggle(false);
  const [filterRadiation, toggleFilterRadiation] = useToggle(false);
  const [filterCyborg, toggleFilterCyborg] = useToggle(false);
  const [filterEternal, toggleFilterEternal] = useToggle(false);
  const [filterUnknown, toggleFilterUnknown] = useToggle(false);
  const [filterOthers, toggleFilterOthers] = useToggle(false);
  const checkboxList = [
    {
      race: "Human",
      filter: filterHuman,
      toggle: toggleFilterHuman,
    },
    {
      race: "Mutant",
      filter: filterMutant,
      toggle: toggleFilterMutant,
    },
    {
      race: "Radiation",
      filter: filterRadiation,
      toggle: toggleFilterRadiation,
    },
    {
      race: "Cyborg",
      filter: filterCyborg,
      toggle: toggleFilterCyborg,
    },
    {
      race: "Eternal",
      filter: filterEternal,
      toggle: toggleFilterEternal,
    },
    {
      race: "Unknown",
      filter: filterUnknown,
      toggle: toggleFilterUnknown,
    },
    {
      race: "Others",
      filter: filterOthers,
      toggle: toggleFilterOthers,
    },
  ];
  const handleCheckboxClick = (event, checkbox) => {
    checkbox.toggle();
    if (event.target.checked) {
      setRaceFilters([...raceFilters, event.target.value]);
    } else {
      setRaceFilters(
        raceFilters.filter((filterType) => filterType !== event.target.value)
      );
    }
  };

  const contextValue = {
    // Context for search and filter results
    allCharacters,
    retrieveCharacters,
    searchInput,
    handleSearchInput,
    filteredResults,
    setFilteredResults,

    // Context for sorting
    sortingOptions,
    anchorRef,
    openPopper,
    togglePopper,
    selectedIndex,
    sortingMethod,
    handleSortButtonClick,
    handleMenuItemClick,
    handleClosePopper,

    // Context for filters
    checkboxList,
    handleCheckboxClick,
    raceFilters,
    setRaceFilters,
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
