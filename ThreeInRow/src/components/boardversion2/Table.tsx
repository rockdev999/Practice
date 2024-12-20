import React, { useEffect, useState } from "react";
import { GeneralProps, Sort } from "../../interfaces/Columns";
import { TbSortAscending2Filled, TbSortAscendingShapesFilled } from "react-icons/tb";
import { MultiCheckSelect } from "./MultiCheckSelect";
import { User, selectDataInterface } from "../../interfaces/Users";
import { MdOutlineCheckBox, MdOutlineIndeterminateCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

// asc, desc, como constantes
export const Table = <T,>({ data, columns }: GeneralProps<T>) => {
  const [sort, setSort] = useState<Sort<T>>({ key: columns[1].dataIndex, direction: "asc" });
  const [position , setPosition] = useState<number>(-1);
  const [stateMultiCheck, setStateMultiCheck] = useState<boolean>(false);
  // array de users donde se controla los checks
  const [stateCheck, setStateCheck] = useState<number[]>(Array(data.length).fill(0))
  // const [positionState, setPositionState] = useState<boolean | undefined>(undefined)
  // undefined ==> vacio
  // false ==> medio
  // true ==> lleno
  const [multiCheckAll, setMultiCheckAll] = useState<boolean>(false);
  const [selectData, setSelectData] = useState<selectDataInterface[]>([]);

  const handleSortClick = (key: keyof T) => {
    let direction: "asc" | "desc" = "asc";
    if (sort.key === key && sort.direction === "asc") {
      direction = "desc";
    }
    setSort({ key, direction });
  };

  const sortedData = (data: T[], sort: Sort<T>): T[] => {
    if (sort.direction === 'asc'){
      return data.sort((userOne, userTwo)=>(userOne[sort.key]>userTwo[sort.key]? 1:-1));
    }
    return data.sort((userOne, userTwo)=>(userOne[sort.key]>userTwo[sort.key]? -1:1));
  };
  const handleMulticheck = (index:number) => {
    // setStateMultiCheck(!stateMultiCheck)
    setStateMultiCheck(true)
    setPosition(index)
    // if(index === position){
    //   setStateMultiCheck(!stateMultiCheck)
    // }

  }
  return (
    <table>
      <thead>
        <tr className="table_headers">
          <th>Check</th>
          {columns.map((column) => (
            <th
              key={column.key}
              onClick={() => handleSortClick(column.dataIndex)}
            >
              {column.title}
              {sort.key === column.dataIndex && 
                (
                  sort.direction === "asc" ? 
                    <TbSortAscending2Filled /> : <TbSortAscendingShapesFilled />
                )
              }
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData(data, sort).map((row, index) => (
          <React.Fragment key={index}>
          <tr 
            // style={{position:'absolute'}}
            onClick={()=>{ handleMulticheck(index)}} 
          >
            <td>
              { stateCheck[index] === 0 &&<MdOutlineCheckBoxOutlineBlank onClick={() => {setMultiCheckAll(!multiCheckAll)}}/>}
              { stateCheck[index] === 1 &&<MdOutlineIndeterminateCheckBox onClick={() => {setMultiCheckAll(!multiCheckAll)}}/>}
              { stateCheck[index] === 2 &&<MdOutlineCheckBox onClick={() => {setMultiCheckAll(!multiCheckAll)}}/>}
            </td>
            {columns.map((column) => (
              <td key={column.key}>
                {
                  column.render? 
                    column.render(row) : String(row[column.dataIndex])
                }
              </td>
            ))}
          </tr>
            {stateMultiCheck && index === position && 
              <MultiCheckSelect 
                data = {row} // es el usuario
                param = 'friends' as keyof User // el parametro donde le dice donde estan los friends
                position = {position} //posicion de user
                stateCheck = {stateCheck} // estado de users
                setStateCheck = {setStateCheck} // estado de users SET
                multiCheckAll = {multiCheckAll} //estado que selecciona todos o ninguno
                selectedData={selectData} // nuevo array con los que User's que son seleccionados y sus amigos seleccionados amigos
                setSelectData={setSelectData} // para modificar el selecData
                />
            }
            </React.Fragment>))}
      </tbody>
    </table>
  );
};