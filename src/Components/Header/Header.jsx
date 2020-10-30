import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid py-3">
      <div className="container">
        <h1 className="display-4 text-center mb-3">Employee Directory</h1>
        <p className="text-center">Click arrows to sort by heading, or use the search box to narrow your results.</p>
      </div>
    </div>
  );
};

export default Header;
