import { Box, Grid } from "@mui/material";
import DisplayResults from "./DisplayResults/DisplayResults";
import FilterByRace from "./FilterByRace";
import SearchBar from "./SearchBar";
import SortCharacters from "./SortCharacters";

export default function Characters() {
  return (
    <Box>
      <Grid container>
        <Grid container>
          <Grid>
            <SearchBar />
          </Grid>
          <Grid>
            <SortCharacters />
          </Grid>
          <Grid>
            <FilterByRace />
          </Grid>
        </Grid>
        <Grid>
          <DisplayResults />
        </Grid>
      </Grid>
    </Box>
  );
}
