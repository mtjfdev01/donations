import React, { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import ReactCountryFlag from "react-world-flags";

const CountryDropdown = ({ value, onChange }) => {
  const options = useMemo(
    () =>
      countryList().getData().map((c) => ({
        value: c.value,
        label: c.label,
      })),
    []
  );

  const formatOptionLabel = ({ value, label }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", zIndex: "1000" }}>
      <ReactCountryFlag code={value} svg="true" style={{ width: "20px" }} />
      <span>{label}</span>
    </div>
  );

  return (
    <div style={{ zIndex: "1000" }}>
      <Select
        options={options}
        value={options.find(option => option.label === value) || null}
        onChange={(selectedOption) => onChange(selectedOption?.label || '')}
        placeholder="Select Country"
        formatOptionLabel={formatOptionLabel}
      />
    </div>
  );
};

export default CountryDropdown;
