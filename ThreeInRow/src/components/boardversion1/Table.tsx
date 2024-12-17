import React, { useState } from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbSortAscending2Filled } from "react-icons/tb";
import { TbSortAscendingShapesFilled } from "react-icons/tb";
import './board.css'

interface Friends{
    id:number,
    name:string,
}
interface User {
    id: string,
    isActive: boolean,
    balance: string,
    age: number,
    eyeColor: string,
    name: string,
    friends: Friends[],
    favoriteFruit:string
}
interface Props{
    data:User[]
}
type Sort = {
    key: keyof User,
    direction:string,
}

export const Table:React.FC<Props> = ({data}) =>{
    const [sort, setSort] = useState<Sort>({key:'name',direction:'asc'});

    const handleSortClick=(key: keyof User)=>{
        let direction = "asc";
        if (sort.key === key && sort.direction === "asc") {
            direction = "desc";
        }
        setSort({ key , direction });
    }

    const sortedData = (data:User[], sort:Sort) => {
        if (sort.direction==='asc'){
            return data.sort((a: User,b: User)=>(a[sort.key]>b[sort.key]? 1:-1));
        }
        return data.sort((a :User,b: User)=>(a[sort.key]>b[sort.key]? -1:1));
    }
    return(
        <table className='table'>
            <thead>
                <tr className='tr_header'>
                    <th onClick={()=>handleSortClick('name')}>Name
                        {
                            sort.key === 'name' && (sort.direction === "asc" ? 
                                (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))
                        }
                    </th>
                    <th onClick={()=>handleSortClick('age')}>Age
                        {sort.key === 'age' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>
                    <th onClick={()=>handleSortClick('balance')}>Balance
                        {sort.key === 'balance' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>
                    <th onClick={()=>handleSortClick('favoriteFruit')}>Favorite Fruit
                        {sort.key === 'favoriteFruit' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>
                    <th onClick={()=>handleSortClick('eyeColor')}>Eye Color
                        {sort.key === 'eyeColor' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>
                    <th onClick={()=>handleSortClick('friends')}>Friends
                        {sort.key === 'friends' && (sort.direction === "asc" ? (<TbSortAscending2Filled />) : (<TbSortAscendingShapesFilled />))}
                    </th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                {sortedData(data,sort).map((user)=>(
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.balance}</td>
                        <td>{user.favoriteFruit}</td>
                        <td>{user.eyeColor}</td>
                        <td>{user.friends.length}</td>
                        <td>{user.isActive?(<FaCheckCircle />):(<FaRegCheckCircle />)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}