// import { createContext, ReactNode, useState } from "react";

// const apiURL = 'https://sample-dogs-api.netlify.app/api/v1/';
// export const GlobalState = createContext<string>('');

// export const GlobalStateProvider=({children}:{children : ReactNode})=>{
//     const dogsURL= apiURL;

//     return(
//         <GlobalState.Provider value={dogsURL}>
//             {children}
//         </GlobalState.Provider>
//     )
// }
// import { createContext, ReactNode, useState } from "react";

// // dogs structure
// interface GlobalPropsDogs {
//     name: string
//     breed: string
//     image: string
//     color: string
//     age: number
//     favoriteToy: string
//     personality: string
//     bio: string
// } 

// // Global context
// interface GlobalContextProps{
//     dogs: GlobalPropsDogs[];
//     setDogs: React.Dispatch<React.SetStateAction<GlobalPropsDogs[]>>
// }

// export const GlobalState = createContext<GlobalContextProps | undefined>(undefined);

// export const GlobalStateProvider=({children}:{children : ReactNode})=>{
//     const [dogs, setDogs] = useState<GlobalPropsDogs[]>([]);

//     const shareData = {
//         dogs,
//         setDogs,
//     };

//     return(
//         <GlobalState.Provider value={shareData}>
//             {children}
//         </GlobalState.Provider>
//     )
// }