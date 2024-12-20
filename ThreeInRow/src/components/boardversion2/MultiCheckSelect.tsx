import { useEffect, useState } from "react";
import { multiCheckProp } from "../../interfaces/Columns";

export const MultiCheckSelect = <T,>({
  data, 
  param, 
  position, 
  stateCheck, 
  setStateCheck, 
  multiCheckAll, 
  selectedData, 
  setSelectedData}: multiCheckProp<T>) => {
  const items = data[param] as any[];
  const [isChecked, setIsChecked] = useState<boolean[]>(Array(items.length).fill(false))
  
  // console.log(data.id)
  const verify = (index: number, item: any) => {
    const updatedChecked = [...isChecked];
    updatedChecked[index] = !updatedChecked[index];
    setIsChecked(updatedChecked);
    let updatedSelectData = [...selectedData];
    const placeSelected = updatedSelectData.findIndex((row) => row.id === data.id);
    if (placeSelected !==-1){
      if(isChecked[index]){
        const searchFriend = updatedSelectData[placeSelected].selectFriends.some((friend) => friend.id === item.id)
        if(!searchFriend){
          updatedSelectData[placeSelected].selectFriends.push(item)
        }
      }
    }else {
      updatedSelectData.push({
        id: data.id,
        name: data.name,
        selectFriends: [item],
      })
    }
    // console.log(updatedSelectData)
    setSelectedData(updatedSelectData)
  };

  

  useEffect(() => {
    let updatedChecked = [...isChecked];
    if(multiCheckAll){
      updatedChecked = Array(updatedChecked.length).fill(true);
    }else {
      updatedChecked = Array(updatedChecked.length).fill(false);
    }
    setIsChecked(updatedChecked)
  },[multiCheckAll])

  useEffect(() => {
    // verificar los estados del Multicheck
    const allSelected = isChecked.every((item) => item === true);
    const noneSelected = isChecked.every((item) => item === false);
    
    // actualizar el estado de check padre
    const updatedSelectedState = [...stateCheck];
    setStateCheck(updatedSelectedState);

    if (allSelected) {
      updatedSelectedState[position] = 2;   // setStateCheck(true)
    } else if (noneSelected) {
      updatedSelectedState[position] = 0;   // setStateCheck(undefined)
    } else {
      updatedSelectedState[position] = 1; 
    }
  },[isChecked])

  

  return (
    <tr className="multiCheckSelect">
        {Array.isArray(items) &&
          items.map((item, index) => (
            <td key={item.id}>
                <input 
                  type="checkbox"
                  checked={isChecked[index]}
                  // aqui puedo mandar el id y el name del amigo para que agregue directamente o lo elimine
                  onChange={() => {verify(index, item)}}
                />
              <span>{item.name}</span>
              
            </td>
          ))}
    </tr>
  );
};
