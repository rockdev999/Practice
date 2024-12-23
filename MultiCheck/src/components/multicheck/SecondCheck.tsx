import React, { useState, useEffect } from "react"
import { ChildrenSelectProps } from "../../interface/Select"


export const SecondCheck:React.FC<ChildrenSelectProps> = ({data, id, changeFriendCheck }) => {
    const [controlCheck, setControlCheck] = useState<boolean>(false);

    // useEffect(() => {
    //     if(multiCheckAll){
    //         data.map((item) => changeFriendCheck(id, item.id, true));
    //         changeCheck(id,2);
    //     }else {
    //         data.map((item) => changeFriendCheck(id, item.id, false))
    //         changeCheck(id,0)
    //     }
    // },[multiCheckAll, controlCheck])    
    return (
        <div className="childrenCheck">
            {
                data.map((item, index) => (
                    <div key={item.id}>
                        <input 
                            type="checkbox" 
                            checked={item.isCheked}
                            onChange={(event) => {
                                changeFriendCheck(id, item.id, event.target.checked)
                                // setControlCheck(!controlCheck)
                            }}
                        />
                        <span>{item.name}</span>
                    </div>
                ))
            }
        </div>
    )
}