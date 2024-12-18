import { columnInterface } from "./Columns"
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";

export interface Friends{
    id:number,
    name:string,
}
export interface User {
    id: string,
    isActive: boolean,
    balance: string,
    age: number,
    eyeColor: string,
    name: string,
    friends: Friends[],
    favoriteFruit:string
}
export interface Props{
    data:User[]
}
export type Sort = {
    key: keyof User,
    direction:string,
}
export const columnsUser: columnInterface<User>[] = [
    {
        dataIndex: 'name',
        title: 'Name',
        key: 'name',
    },
    {
        dataIndex: 'age',
        title: 'Age',
        key: 'age',
    },
    {
        dataIndex: 'balance',
        title: 'Balance',
        key: 'balance',
    },
    {
        dataIndex: 'favoriteFruit',
        title: 'Favorite Fruit',
        key: 'favoriteFruit',
    },
    {
        dataIndex: 'eyeColor',
        title: 'Eye Color',
        key: 'eyeColor',
    },
    {
        render: (user: User) => {
            return <div>{user.friends.length}</div>
        },
        dataIndex: 'friends',
        title: 'Friends',
        key: 'friends',
    },
    {
        render: (user : User) => {
            return <div>{user.isActive?(<FaCheckCircle />):(<FaRegCheckCircle />)}</div>
        },
        dataIndex: 'isActive',
        title: 'Active',
        key: 'Active',
    },
]

export interface selectList {
    parent: string,
    friends: Friends[],
}