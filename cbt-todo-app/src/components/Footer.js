import React from "react";

function Footer() {
  // Get the current year
  const year = new Date().getFullYear();
  
  return (
    <footer>
      {/* Footer text with the current year */}
      <p>Copyright ⓒ CBT Internship Project {year}</p>
    </footer>
  );
}

export default Footer;
