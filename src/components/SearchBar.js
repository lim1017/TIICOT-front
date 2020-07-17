import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "20ch",
  },
}));

function SearchBar({ type }) {
  const classes = useStyles();

  return (
    <div style={{width:"80%", margin:"auto"}} className="searchbar-container">
      <TextField
        id="filled-full-width"
        // style={{ margin: 8 }}
        placeholder={`Search by ${type}`}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="filled"
      />
    </div>
  );
}

export default SearchBar;
