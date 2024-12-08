import { createContext } from "react";

//1st step
export const Bio = createContext();

// 2nd step
export const Bioprovider = ({children}) => {
  const myName = "Bipul";
  const age=10;
  return <Bio.Provider value={{myName, age}}>{children}</Bio.Provider>;
};
