// SelectList.ts 
// import { SelectProp } from "../../interfaces/Select"

// export const SelectList = <T,>({items}:SelectProp<T>) => {
//     console.log('Select List', items)
//     return(
//         <div>
//             {
//                 items.map((item, index) => {
//                     return (
//                         <div key={index}>{item.name}</div>
//                     )
//                 })
//             }
//         </div>
//     )
// } 
// import { SelectProp } from "../../interfaces/Select"

// export const SelectList = ({items}:SelectProp) => {
//     console.log('Select List', items)
//     return(
//         <div>
//             {/* <input type="checkbox" /> */}
//                 {/* <input key={item.id} type="checkbox" /> */}
//             <select name="select" id="">
//             {
//                 items.map((item) => {
//                     return (
//                         <option key={item.id}>
//                             {item.name}
//                         </option>
//                     )
//                 })
//             }
//             </select>
//         </div>
//     )
// } 
import { useState } from "react";

interface Item{
    id:number,
    name:string,
}
interface Items{
    items: Item[];
    father: string;
}

export const MultiCheckSelect = ({items, father}:Items) => {
    const [selectItems, setSelectItems] = useState<Item[]>([])

    const handleCheckboxChange = (newItem:Item, isChecked:boolean) => {
        setSelectItems((prev) => {
            if (isChecked) {
                return [...prev, newItem];
            } else {
                return prev.filter((item) => item.id !== newItem.id);
            }
        });
    }

    return (
        <div>
            {
                items.map((item)=>(
                    <div key={item.id}>
                        <input 
                            type="checkbox"
                            // checked={}
                            onChange={(event) => {handleCheckboxChange(item, event.target.checked)}}
                        />
                        {item.name}
                    </div>
                ))
            }
            <p>{father}: <br /></p>
            {
                selectItems.map((item) => (
                    <div key={item.id}>
                        {item.name}
                    </div>
                ))
            }
        </div>
    )
};