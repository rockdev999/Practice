import React, { useState } from "react";
// import { Example } from "../boardversion2/ejemplo";
import { MdOutlineCheckBox, MdOutlineIndeterminateCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

interface Friends {
  id: number;
  name: string;
}
interface User {
  id: string;
  isActive: boolean;
  balance: string;
  age: number;
  eyeColor: string;
  name: string;
  friends: Friends[];
  favoriteFruit: string;
}
interface Props {
  data: User[];
}
type RowState = "vacío" | "medio" | "lleno";

export const Table: React.FC<Props> = ({ data }) => {
  const [rowStates, setRowStates] = useState<RowState[]>(Array(data.length).fill("vacío")); // Estado de cada fila
  const [checkboxesState, setCheckboxesState] = useState<boolean[][]>(
    data.map((user) => Array(user.friends.length).fill(false)) // Estado de los checkboxes por fila
  );

  const updateRowState = (rowIndex: number, checkboxes: boolean[]) => {
    const totalChecked = checkboxes.filter((checked) => checked).length;
    const newRowStates = [...rowStates];

    if (totalChecked === 0) {
      newRowStates[rowIndex] = "vacío";
    } else if (totalChecked === checkboxes.length) {
      newRowStates[rowIndex] = "lleno";
    } else {
      newRowStates[rowIndex] = "medio";
    }

    setRowStates(newRowStates);
  };

  const handleCheckboxChange = (rowIndex: number, friendIndex: number) => {
    const newCheckboxesState = [...checkboxesState];
    newCheckboxesState[rowIndex][friendIndex] = !newCheckboxesState[rowIndex][friendIndex];

    setCheckboxesState(newCheckboxesState);
    updateRowState(rowIndex, newCheckboxesState[rowIndex]);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Estado</th>
          <th>Name</th>
          <th>Age</th>
          <th>Balance</th>
          <th>Favorite Fruit</th>
          <th>Eye Color</th>
          <th>Friends</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, rowIndex) => (
          <tr key={user.id}>
            <td>
              {rowStates[rowIndex] === "vacío" && <MdOutlineCheckBoxOutlineBlank />}
              {rowStates[rowIndex] === "medio" && <MdOutlineIndeterminateCheckBox />}
              {rowStates[rowIndex] === "lleno" && <MdOutlineCheckBox />}
            </td>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.balance}</td>
            <td>{user.favoriteFruit}</td>
            <td>{user.eyeColor}</td>
            <td>
              {/* <Example
                friends={user.friends}
                checkboxesState={checkboxesState[rowIndex]}
                onCheckboxChange={(friendIndex) => handleCheckboxChange(rowIndex, friendIndex)}
              /> */}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
// import React from "react";

// interface Props {
//   friends: { id: number; name: string }[];
//   checkboxesState: boolean[]; // Estado de los checkboxes
//   onCheckboxChange: (friendIndex: number) => void; // Función para manejar cambios
// }

// export const Example: React.FC<Props> = ({ friends, checkboxesState, onCheckboxChange }) => {
//   return (
//     <ul>
//       {friends.map((friend, index) => (
//         <li key={friend.id}>
//           <input
//             type="checkbox"
//             checked={checkboxesState[index]}
//             onChange={() => onCheckboxChange(index)} // Llama al controlador del padre
//           />
//           {friend.name}
//         </li>
//       ))}
//     </ul>
//   );
// };