import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

function PriceFilter(props) {
  const { handleChange, value } = props;
  const classes = useStyles();

  return (
    // <select onChange={(e)=>handleChange(e.target.value.split(","))}>
    //     <option value = "" selected disabled>Price Range</option>
    //     <option value = "0,500">0-500</option>
    //     <option value = "500,1000">500-1000</option>
    //     <option value = "1000,5000">1000-5000</option>
    // </select>

    <>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">
          Price Range
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Price Range"
        >
          <MenuItem value={(0, 500)}>0-500</MenuItem>
          <MenuItem value={(500, 1000)}>500-1000</MenuItem>
          <MenuItem value={(1000, 5000)}>1000-5000</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default PriceFilter;
