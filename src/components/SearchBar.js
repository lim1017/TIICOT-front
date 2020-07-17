import React from "react";
import TextField from "@material-ui/core/TextField";

function SearchBar({ type, nameSearch, setNameSearch }) {
  return (
    <div
      style={{ width: "80%", margin: "auto" }}
      className="searchbar-container"
    >
      <TextField
        id="filled-full-width"
        placeholder={`Search by ${type} name`}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        value={nameSearch.type}
        variant="filled"
        onChange={(e) =>
          setNameSearch({ ...nameSearch, [`${type}`]: e.target.value })
        }
      />
    </div>
  );
}

export default SearchBar;
