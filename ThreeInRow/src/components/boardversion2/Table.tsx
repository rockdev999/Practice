import { useState } from "react";
import { GeneralProps, Sort } from "../../interfaces/Columns";
import { TbSortAscending2Filled, TbSortAscendingShapesFilled } from "react-icons/tb";

export const Table = <T,>({ data, columns }: GeneralProps<T>) => {
  const [sort, setSort] = useState<Sort<T>>({ key: columns[0].dataIndex, direction: "asc" });

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

  return (
    <table>
      <thead>
        <tr className="table_headers">
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
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>
                {
                  column.render? 
                    column.render(row) : String(row[column.dataIndex])
                }
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};