import React, { useState } from "react"
import { CheckState, DataSelectProps } from "../../interface/Select"
import { SecondCheck } from "./SecondCheck";
import { MdOutlineCheckBox, MdOutlineIndeterminateCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

export const PrincipalCheck:React.FC<DataSelectProps> = ({data, changePrincipalCheck, changeFriendCheck}) => {
    const [position, setPosition] = useState<number>(-1);
    const [childrenState, setChildrenState] = useState<boolean>(false);
    const [multiCheckAll, setMultiCheckAll] = useState<boolean>(false);
    // const [stateCheck, setStateCheck] = useState<number>(0)
    // console.log(data)


    const handleChildren = (index: number) => {
        setPosition(index)
        setChildrenState(!childrenState);
    }
    return (
        <div className="check">
            {
                data.map((rowParent, index) => (
                <React.Fragment key={rowParent.id}>
                    <div className="parentCheck">
                    { rowParent.checked === CheckState.empty && <MdOutlineCheckBoxOutlineBlank onClick={() => {changePrincipalCheck(rowParent.id, CheckState.full)}}/>}
                    { rowParent.checked === CheckState.partial && <MdOutlineIndeterminateCheckBox onClick={() => {changePrincipalCheck(rowParent.id, CheckState.empty)}}/>}
                    { rowParent.checked === CheckState.full && <MdOutlineCheckBox onClick={() => {changePrincipalCheck(rowParent.id, CheckState.empty)}}/>}
                        <span
                            onClick={() => handleChildren(index)}
                        >
                            {rowParent.name}
                        </span>
                    </div>
                    {
                        childrenState && 
                        index === position && 
                        <SecondCheck 
                            data={rowParent.friends}
                            id={rowParent.id}
                            changeFriendCheck={changeFriendCheck}
                            // multiCheckAll = {multiCheckAll} //estado que selecciona todos o ninguno
                            // changeCheck = {changeCheck}
                        /> 
                    }
                </React.Fragment>
                )
            )}
        </div>
    )
}