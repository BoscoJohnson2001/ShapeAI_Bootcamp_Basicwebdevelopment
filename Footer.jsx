import React from "react";

function Footer() {
  var C_year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {C_year}</p>
    </footer>
  );
}

export default Footer;
