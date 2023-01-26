import React, { useContext } from "react";
import { AccordionContext } from "./accordion";

function Header({ children }) {
  const { handleIsExpand } = useContext(AccordionContext);
  return <div onClick={handleIsExpand}>{children}</div>;
}

export default Header;
