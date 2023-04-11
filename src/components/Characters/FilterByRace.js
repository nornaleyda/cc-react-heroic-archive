import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";
import { useCharsContext } from "../../context/CharsContext";
import { useToggle } from "../../hooks/useToggle";

export default function FilterByRace() {
  const { checkboxList, raceFilters, handleCheckboxClick, setRaceFilters } =
    useCharsContext();

  // const [raceFilters, setRaceFilters] = useState([]);
  // const [filterHuman, toggleFilterHuman] = useToggle(false);
  // const [filterMutant, toggleFilterMutant] = useToggle(false);
  // const [filterRadiation, toggleFilterRadiation] = useToggle(false);
  // const [filterCyborg, toggleFilterCyborg] = useToggle(false);
  // const [filterEternal, toggleFilterEternal] = useToggle(false);
  // const [filterUnknown, toggleFilterUnknown] = useToggle(false);
  // const [filterOthers, toggleFilterOthers] = useToggle(false);

  // const checkboxList = [
  //   {
  //     race: "Human",
  //     filter: filterHuman,
  //     toggle: toggleFilterHuman,
  //   },
  //   {
  //     race: "Mutant",
  //     filter: filterMutant,
  //     toggle: toggleFilterMutant,
  //   },
  //   {
  //     race: "Radiation",
  //     filter: filterRadiation,
  //     toggle: toggleFilterRadiation,
  //   },
  //   {
  //     race: "Cyborg",
  //     filter: filterCyborg,
  //     toggle: toggleFilterCyborg,
  //   },
  //   {
  //     race: "Eternal",
  //     filter: filterEternal,
  //     toggle: toggleFilterEternal,
  //   },
  //   {
  //     race: "Unknown",
  //     filter: filterUnknown,
  //     toggle: toggleFilterUnknown,
  //   },
  //   {
  //     race: "Others",
  //     filter: filterOthers,
  //     toggle: toggleFilterOthers,
  //   },
  // ];

  const renderCheckbox = () => {
    return checkboxList.map((checkbox, index) => {
      return (
        <FormControlLabel
          label={checkbox.race}
          name={checkbox.race}
          value={checkbox.race}
          key={index}
          control={<Checkbox checked={checkbox.filter} />}
          onClick={(event) => handleCheckboxClick(event, checkbox)}
        />
      );
    });
  };
  return <FormGroup>{renderCheckbox()}</FormGroup>;
}
