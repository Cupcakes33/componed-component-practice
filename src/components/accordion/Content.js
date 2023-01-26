import React, { useContext } from "react";
import { AccordionContext } from "./accordion";

function Content({ children }) {
  const { isExpand } = useContext(AccordionContext);
  return isExpand ? <div>{children}</div> : null;
}

export default Content;
