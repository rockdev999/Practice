import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbSortAscending2Filled } from "react-icons/tb";
import { TbSortAscendingShapesFilled } from "react-icons/tb";
import { Props, Sort, User, columns } from '../../interfaces/Users';
import { Table } from 'antd';

export const Table1:React.FC<Props> = ({data}) =>{
    const [sort, setSort] = useState<Sort>({key:'name',direction:'asc'});
    const headers = Object.keys(data[0]);
    console.log(headers)
    headers.map((header)=>{
        console.log(header)
    })
    const handleSortClick=(key: keyof User)=>{
        let direction = "asc";
        if (sort.key === key && sort.direction === "asc") {
            direction = "desc";
        }
        setSort({ key , direction });
    }

    const sortedData = (data:User[], sort:Sort) => {
        if (sort.direction==='asc'){
            return data.sort((userOne: User,userTwo: User)=>(userOne[sort.key] > userTwo[sort.key]? 1:-1));
        }
        return data.sort((userOne :User,userTwo: User)=>(userOne[sort.key] > userTwo[sort.key]? -1:1));
    }
    return(
        <div>
            <Table dataSource={sortedData(data,sort)} columns={columns} />;
            {/* <thead>
                <tr className='tr_header'>
                    {headers.map((header)=>{
                        return (<th key={header[0]}>{header}</th>)
                    })}
                    {/* <th onClick={()=>handleSortClick('name')}>Name
                        {
                            sort.key === 'name' && (sort.direction === "asc" ? 
                                (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))
                        }
                    </th> */}
                    {/* <th onClick={()=>handleSortClick('age')}>Age
                        {sort.key === 'age' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>*/}
                    {/* <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {sortedData(data,sort).map((user)=>(
                    <tr key={user.id}>
                        {}
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.balance}</td>
                        <td>{user.favoriteFruit}</td>
                        <td>{user.eyeColor}</td>
                        <td>{user.friends.length}</td>
                        <td>{user.isActive?(<FaCheckCircle />):(<FaRegCheckCircle />)}</td>
                    </tr>
                ))}
            </tbody> */}
        </div>
    )
}