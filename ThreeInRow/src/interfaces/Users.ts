
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
export const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
    },
    {
        title: 'Favorite Fruit',
        dataIndex: 'favoriteFruit',
        key: 'favoriteFruit',
    },
    {
        title: 'Eye Color',
        dataIndex: 'eyeColor',
        key: 'eyeColor',
    },
    {
        title: 'Friends',
        dataIndex: 'friends',
        key: 'friends',
    },
    {
        title: 'Active',
        dataIndex: 'active',
        key: 'active',
    },
]
export interface Props{
    data:User[]
}
export type Sort = {
    key: keyof User,
    direction:string,
}