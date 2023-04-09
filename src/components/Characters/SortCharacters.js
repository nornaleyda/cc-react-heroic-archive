import {
  ArrowDropDown as ArrowDropDownIcon,
  ArrowDropUp as ArrowDropUpIcon,
  SwapVert as SwapVertIcon,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@mui/material";
import { Fragment } from "react";
import { useCharsContext } from "../../context/CharsContext";

export default function SortCharacters() {
  const {
    anchorRef,
    handleClosePopper,
    handleMenuItemClick,
    handleSortButtonClick,
    handleTogglePopper,
    openPopper,
    selectedIndex,
    sortingMethod,
    sortingOptions,
  } = useCharsContext();

  const sortIcon = () => {
    return sortingMethod.reverseOrder ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />
  }
  console.log(sortingMethod);
  return (
    <Fragment>
      <ButtonGroup variant="contained" ref={anchorRef}>
        <Button size="small" onClick={handleTogglePopper}>
          <SwapVertIcon />
        </Button>
        <Button onClick={handleSortButtonClick}>
          {sortingOptions[selectedIndex]}<i>{sortIcon()}</i>
        </Button>
      </ButtonGroup>
      <Popper
        sx={{ zIndex: 1 }}
        open={openPopper}
        anchorEl={anchorRef.current}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={(event) => {
                  handleClosePopper(event);
                }}
              >
                <MenuList id={"split-button-menu"} autoFocusItem>
                  {sortingOptions.map((option, index) => (
                    <MenuItem
                      key={option}
                      selected={index === selectedIndex}
                      onClick={(event) => {
                        handleMenuItemClick(event, index);
                      }}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Fragment>
  );
}
