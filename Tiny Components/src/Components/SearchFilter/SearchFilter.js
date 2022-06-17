import React, { useState } from "react";
import JsonData from "../../MOCK_DATA.json";
import "./SearchFilter.css";

export const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="seachBarApp">
      <input
        type="text"
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        placeholder="Search ..."
      />
      {JsonData.filter((val) => {
        if (searchTerm == "") {
          return val;
        } else if (
          val.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return val;
        }
      }).map((val, key) => {
        return (
          <div key={key} className="jsonData">
            <p>{val.firstName}</p>
          </div>
        );
      })}
    </div>
  );
};
