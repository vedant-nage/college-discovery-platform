import { useState } from "react";

export default function SearchBar({
  onSearch
}) {
  const [search, setSearch] =
    useState("");

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <button
        onClick={() =>
          onSearch(search)
        }
      >
        Search
      </button>
    </div>
  );
}