import React from "react";

export default function Search() {
  const displayResult = (e) => {
    console.log("Button clicked");
    var value = document.getElementById("inputvalue");
    if (value === "Fast") {
      <h1>Fast Searched</h1>;
    } else {
      <h1>Fast Not Searched</h1>;
    }
  };

  return (
    <div>
      <form className="d-flex mt-4 mb-2">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search universities"
          aria-label="Search"
          id="inputvalue"
        />
        <button
          onClick={{ displayResult }}
          className="btn btn-outline-warning"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
  );
}