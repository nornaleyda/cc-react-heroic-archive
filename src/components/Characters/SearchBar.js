import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../styles/SearchBarStyles";
import { Search as SearchIcon } from "@mui/icons-material";
import { useCharsContext } from "../../context/CharsContext";

export default function SearchBar() {
  const { handleSearchInput, searchInput } = useCharsContext();

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={(event) => handleSearchInput(event.target.value)}
        value={searchInput}
      />
    </Search>
  );
}
