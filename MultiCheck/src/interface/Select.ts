import { Dispatch, SetStateAction } from "react";

interface Friend {
    id: number;
    name: string;
}
export interface User {
    id: string;
    isActive: boolean;
    balance: string;
    age: number;
    eyeColor: string;
    name: string;
    friends: Friend[];
    favoriteFruit: string;
}
export interface FriendSelected {
    id: number;
    name: string;
    isCheked: boolean;
}
export interface DataSelect {
    id: string;
    checked: number;
    name: string;
    friends: FriendSelected[];
}

export const TransformData = (data:User[]): DataSelect[] => {
    return data.map((item) => ({
        id: item.id,
        checked: 0,
        name: item.name,
        friends: item.friends.map((friend) => ({
            ...friend,
            isCheked: false,
        }))
    }))
} 

export interface GeneralProps {
    data: User[];
}
export interface DataSelectProps {
    data: DataSelect[];
    changePrincipalCheck: (id:string, newStateCheck: CheckState) => void
    changeFriendCheck : (id:string, friendId: number, isCheked: boolean) => void
}
export interface ChildrenSelectProps {
    data: FriendSelected[];
    id: string;
    // changeCheck: (id:string, checked: number) => void
    changeFriendCheck : (id:string, friendId: number, isCheked: boolean) => void
    // multiCheckAll: boolean; 
}

export enum CheckState {
    empty,
    partial,
    full
}