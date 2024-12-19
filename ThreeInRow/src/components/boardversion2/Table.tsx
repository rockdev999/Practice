import React, { useState } from "react";
import { GeneralProps, Sort } from "../../interfaces/Columns";
import { TbSortAscending2Filled, TbSortAscendingShapesFilled } from "react-icons/tb";
import { MultiCheckSelect } from "./MultiCheckSelect";
import { User } from "../../interfaces/Users";
import { MdOutlineCheckBox, MdOutlineIndeterminateCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

enum state {
  empty,
  someFilled,
  full
}
// asc, desc, como constantes
export const Table = <T,>({ data, columns }: GeneralProps<T>) => {
  const [sort, setSort] = useState<Sort<T>>({ key: columns[1].dataIndex, direction: "asc" });
  const [states, setStates] = useState<number[]>(Array(data.length).fill(state.empty))
  const [position , setPosition] = useState<number>(-1);
  const [stateMultiCheck, setStateMultiCheck] = useState<boolean>(false);

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
    if(index === position){
      setStateMultiCheck(!stateMultiCheck)
    }
  }
  // const param: keyof User = 'friends'

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
            
            onClick={()=>{ handleMulticheck(index)}} 
          >
            <td>
              {states[index] === state.empty && <MdOutlineCheckBoxOutlineBlank />}
              {states[index] === state.someFilled && <MdOutlineIndeterminateCheckBox />}
              {states[index] === state.full && <MdOutlineCheckBox />}
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
            {stateMultiCheck && index === position && <MultiCheckSelect config={{data:row, param:'friends' as keyof User,}}/>}
            </React.Fragment>))}
      </tbody>
    </table>
  );
};