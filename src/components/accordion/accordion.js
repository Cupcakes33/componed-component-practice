import React, { useMemo, useCallback } from "react";
import Header from "./Header";
import Content from "./Content";

export const AccordionContext = React.createContext();

const Accordion = ({ children, ...rest }) => {
  const [isExpand, setIsExpand] = React.useState(false);
  const handleIsExpand = useCallback(() => setIsExpand((prev) => !prev), []);
  const values = useMemo(
    () => ({ isExpand, handleIsExpand }),
    [isExpand, handleIsExpand]
  );

  return (
    <AccordionContext.Provider value={values}>
      {children}
    </AccordionContext.Provider>
  );
};

Accordion.Header = Header;
Accordion.Content = Content;

export default Accordion;
