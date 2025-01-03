// import { createContext } from "react";

import { createContext } from "react";

// // 1st step
// export const BioContext=createContext();

// // 2nd step

// export const BioProvider=({children})=>{
//     const MyName="Bipul"
//     const age="32"
//     return(
//         <BioContext.Provider value={{MyName,age}}>
// {children}
//         </BioContext.Provider>
//     )
// }

export const Bio=createContext()

export const BioProvider=({Children})=>{
    const name="Bipul"
   const age="32"
    return(
        <Bio.Provider value={{name,age}}>
{Children}
        </Bio.Provider>
    )
}