// SearchBar.js

import React, { useState } from "react";
import "./bar.css";
export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input class="bar"
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleInputChange}
        />
    </div>
  );
}
