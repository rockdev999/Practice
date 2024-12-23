import React, { useState } from "react"
import { PrincipalCheck } from "./PrincipalCheck";
import { DataSelect, GeneralProps, TransformData, CheckState } from "../../interface/Select";

export const MultiCheck:React.FC<GeneralProps> = ({data}) => {
    const [checkParent, setCheckParent] = useState<boolean>(false);
    const [newData, setNewData] = useState<DataSelect[]>(TransformData(data));

    const changePrincipalCheck = (id:string, newStateCheck:CheckState) => {
        setNewData(prevData => {
            return prevData.map((user) => {
                const copyUser = {...user}
                if (copyUser.id === id){
                    copyUser.checked = newStateCheck;
                    if (newStateCheck === CheckState.empty){
                        copyUser.friends = copyUser.friends.map((friend) => {
                            return {
                                ...friend,
                                isCheked: false
                            } 
                        })
                    }  
                    if (newStateCheck === CheckState.full){
                        copyUser.friends = copyUser.friends.map((friend) => {
                            return {
                                ...friend,
                                isCheked: true
                            } 
                        })
                    }
                    console.log(copyUser)
                }
                return copyUser;
            })
        })
    }

    // loguica que se marque, si no que se desmarque
    const changeFriendCheck = (id:string, friendId: number, isCheked: boolean) => {
        setNewData(prevData => {
            return prevData.map((user) => {
                if(user.id === id){
                    const copyUser = {...user} //para objeto entre llaves con puntos
                    const idx = copyUser.friends.findIndex((friend) => friend.id === friendId);
                    if (idx !==-1){
                        copyUser.friends[idx].isCheked = isCheked;
                    }
                    const isAllChecked = copyUser.friends.every((friend) => friend.isCheked) //true
                    const someChecked = copyUser.friends.some((friend) => friend.isCheked) //true
                    if (isAllChecked){
                        copyUser.checked = CheckState.full;
                    }else {
                        if (someChecked) {
                            copyUser.checked = CheckState.partial;
                        } else {
                            copyUser.checked = CheckState.empty;
                        }
                    }
                    return copyUser;
                }else {
                    return user;
                }
            })
        })
    }
    // const changeCheck = (id:string, cheked: number) => {
    //     setNewData((prevData =>
    //         prevData.map((user) => 
    //             user.id === id ?
    //             {
    //                 ...user,
    //                 checked: cheked,
    //             }
    //             : user
    //         )
    //     ))
    // }

    return (
        <div className="select">
            <span
                className="principalInput"
                onClick={() => setCheckParent(!checkParent)}
            >Users</span>
            {checkParent &&
                <PrincipalCheck 
                    data = {newData}
                    changePrincipalCheck = {changePrincipalCheck} 
                    changeFriendCheck = {changeFriendCheck}
                />
            }
        </div>
    )
}