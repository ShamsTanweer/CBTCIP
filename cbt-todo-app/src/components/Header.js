import React from "react";
import HighlightIcon from "@material-ui/icons/Highlight";

function Header() {
  return (
    <header>
      {/* Header section with a title and icon */}
      <h1>
        {/* Highlight icon from Material-UI */}
        <HighlightIcon />
        {/* Title of the application */}
        To-Do List
      </h1>
    </header>
  );
}

export default Header;
