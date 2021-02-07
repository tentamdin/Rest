import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

function Sort(props) {
  const { handleChange, value } = props;
  const classes = useStyles();
  return (
    // <select placeholder="Price Sort" onChange = {(e) => handleChange(e.target.value)}>
    //     <option value = "" disabled selected>Sort option</option>
    //     <option value = "1,1">Ratings (Low to High)</option>
    //     <option value = "1,-1">Ratings (High to Low)</option>
    //     <option value = "2,1">Cost (Low to High)</option>
    //     <option value = "2,-1">Cost (High to Low)</option>

    // </select>
    <>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Sort"
        >
          <MenuItem value={(1, 1)}>Ratings (Low to High)</MenuItem>
          <MenuItem value={(1, -1)}>Ratings (High to Low)</MenuItem>
          <MenuItem value={(2, 1)}>Cost (Low to High)</MenuItem>
          <MenuItem value={(2, -1)}>Cost (Low to High)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default Sort;
