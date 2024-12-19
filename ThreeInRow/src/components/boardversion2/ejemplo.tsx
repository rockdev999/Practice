import React, { useState } from "react";
import { Friends, FriendsProps } from "../../interfaces/Users";

interface Props {
  friends: Friends[];
  checkboxesState: boolean[]; // Estado de los checkboxes
  setCheckboxesState: (state: boolean[]) => void; // Función para actualizar el estado
}

export const Example: React.FC<Props> = ({ friends, checkboxesState, setCheckboxesState })=> {
  const [isChecked, setChecked] = useState<boolean[]>(Array(friends.length).fill(false));

  const verify = (position: number) => {
    const updatedChecked = [...isChecked];
    updatedChecked[position] = !updatedChecked[position]; // Alternar estado
    setChecked(updatedChecked);

    // Actualizar el estado de selección
    const updatedSelectedState = [...selectedState];
    updatedSelectedState[position] = updatedChecked[position];
    setSelectedState(updatedSelectedState);

    // Verificar los estados
    const allSelected = updatedSelectedState.every((item) => item === true);
    const noneSelected = updatedSelectedState.every((item) => item === false);

    if (allSelected) {
      setStateFull(true);
      setStateEmpty(false);
      setStateFilling(false);
    } else if (noneSelected) {
      setStateEmpty(true);
      setStateFull(false);
      setStateFilling(false);
    } else {
      setStateFilling(true);
      setStateEmpty(false);
      setStateFull(false);
    }
  };

  return (
    <td
      style={{
        position: "absolute",
        backgroundColor: "gray",
        zIndex: "10",
        right: "0",
        width: "200px",
        top: "44px",
      }}
    >
      <ul>
        {friends.map((user, index) => (
          <li key={user.id}>
            <input
              type="checkbox"
              checked={isChecked[index]} // Controlar estado individual
              onChange={() => verify(index)} // Actualizar solo el checkbox clickeado
            />
            {user.name}
          </li>
        ))}
      </ul>
    </td>
  );
};

// import React from "react";
// import { FriendsProps } from "../../interfaces/Users";

// interface Props {
//   friends: { id: number; name: string }[];
//   checkboxesState: boolean[]; // Estado de los checkboxes
//   onCheckboxChange: (friendIndex: number) => void; // Función para actualizar el estado
// }

// export const Example: React.FC<Props> = ({ friends, checkboxesState, onCheckboxChange }) => {
//   const handleCheckboxChange = (index: number) => {
//     const newState = [...checkboxesState];
//     newState[index] = !newState[index]; // Alternar el estado del checkbox seleccionado
//     onCheckboxChange(newState);
//   };

//   return (
//     <td
//       style={{
//         position: "absolute",
//         backgroundColor: "blue",
//         zIndex: 10,
//         right: "0",
//         width: "200px",
//         top: "0",
//       }}
//     >
//       <ul>
//         {friends.map((friend, index) => (
//           <li key={friend.id}>
//             <input
//               type="checkbox"
//               checked={checkboxesState[index]} // Estado individual del checkbox
//               onChange={() => handleCheckboxChange(index)} // Actualizar solo el checkbox seleccionado
//             />
//             {friend.name}
//           </li>
//         ))}
//       </ul>
//     </td>
//   );
// };