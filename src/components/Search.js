import React from "react";

function Search({searchTerm, updateSearchTerm}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt"
          value={searchTerm}
          placeholder="type a name to search..."
          onChange={(e) => updateSearchTerm(e.target.value)}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
