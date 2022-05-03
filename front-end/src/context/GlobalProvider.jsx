import React, { useEffect }from "react";
import GlobalContext from "./GlobalContext";

function GlobalProvider({ children }) {

  return (
    <GlobalContext.Provider value={ context }>
      {children}
    </GlobalContext.Provider>
  );
}