import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { useState } from "react";

export default function FilterByRace() {
  const [allChecked, setAllChecked] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const handleCheck = (event, index) => {
    const newChecked = [...allChecked];
    newChecked[index] = event.target.checked;
    setAllChecked(newChecked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        label="All"
        control={
          <Checkbox
            checked={
              allChecked[0] &&
              allChecked[1] &&
              allChecked[2] &&
              allChecked[3] &&
              allChecked[4] &&
              allChecked[5] &&
              allChecked[6]
            }
            // indeterminate={}
          />
        }
      />
      <FormControlLabel
        label="Human"
        control={
          <Checkbox
            checked={allChecked[0]}
            onChange={(event) => handleCheck(event, 0)}
          />
        }
      />
      <FormControlLabel
        label="Mutant"
        control={
          <Checkbox
            checked={allChecked[1]}
            onChange={(event) => handleCheck(event, 1)}
          />
        }
      />
      <FormControlLabel
        label="Radiation"
        control={
          <Checkbox
            checked={allChecked[2]}
            onChange={(event) => handleCheck(event, 2)}
          />
        }
      />
      <FormControlLabel
        label="Cyborg"
        control={
          <Checkbox
            checked={allChecked[3]}
            onChange={(event) => handleCheck(event, 3)}
          />
        }
      />
      <FormControlLabel
        label="Eternal"
        control={
          <Checkbox
            checked={allChecked[4]}
            onChange={(event) => handleCheck(event, 4)}
          />
        }
      />
      <FormControlLabel
        label="Unknown"
        control={
          <Checkbox
            checked={allChecked[5]}
            onChange={(event) => handleCheck(event, 5)}
          />
        }
      />
      <FormControlLabel
        label="Others"
        control={
          <Checkbox
            checked={allChecked[6]}
            onChange={(event) => handleCheck(event, 6)}
          />
        }
      />
    </FormGroup>
  );
}
