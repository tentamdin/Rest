import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: "80%",
  },
}));

function RateFilter(props) {
  const { handleChange, value } = props;
  const classes = useStyles();
  return (
    // <div>
    //     <select  onChange={(e)=>handleChange(e.target.value)}>
    //         <option value="" disabled selected>Ratings</option>
    //         <option value = "1">1</option>
    //         <option value = "2">2</option>
    //         <option value = "3">3</option>
    //         <option value = "4">4</option>
    //         <option value = "5">5</option>
    //     </select>
    // </div>
    <>
      <FormControl
        variant="outlined"
        size="small"
        className={classes.formControl}
      >
        <InputLabel id="demo-simple-select-outlined-label">Ratings</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={value}
          onChange={handleChange}
          label="Price Range"
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}
export default RateFilter;
