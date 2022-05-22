import React from "react";
import "./Header.css";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import categories from "../Data/Category";

function Header({ category, setCategory, word, setWord, label, setLabel }) {
  const handleChange = (event) => {
    setWord(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    const newLabel = categories.find(
      (category) => category.value === event.target.value
    );
    setLabel(newLabel.label);
    setWord("");
  };

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#577EAD",
      },
      mode: "dark",
    },
  });
  return (
    <div className="header">
      <span className="title">{word ? word : "Word Hunt"}</span>
      <div className="inputs">
        <ThemeProvider theme={darkTheme}>
          <TextField
            className="search"
            id="outlined-multiline-flexible"
            label="Search a word "
            multiline
            maxRows={4}
            value={word}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel className="select" id="demo-simple-select-label">
              Please select your currency
            </InputLabel>
            <Select
              className="select"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Please select your currency"
              onChange={handleCategoryChange}
            >
              {categories.map((category, idx) => (
                <MenuItem key={idx} value={category.value}>
                  {category.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default Header;
