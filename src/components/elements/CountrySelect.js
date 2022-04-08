import React, { useMemo } from "react";
import countryList from "react-select-country-list";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

const CountrySelect = (props) => {
  const countriesList = useMemo(() => countryList().getLabels(), []);
  const handleChange = (_event, newValue) => {
    if (newValue !== null) {
      props.setValue(newValue);
    } else {
      props.setValue(null);
    }
  };

  return (
    <Autocomplete
      id={props.id}
      options={countriesList}
      autoHighlight
      value={props.value || null}
      onChange={handleChange}
      isOptionEqualToValue={(option, value) => option === value}
      renderInput={(params) => (
        <TextField
          margin="normal"
          required={props.required}
          {...params}
          label={props.label}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
};

export default CountrySelect;
