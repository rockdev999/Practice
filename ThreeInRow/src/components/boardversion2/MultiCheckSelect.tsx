import { multiCheckInterface } from "../../interfaces/Columns";

export const MultiCheckSelect = <T,>({ config }: { config: multiCheckInterface<T> }) => {
  const { data, param } = config;
  const items = data[param] as any[];

  return (
    <tr className="multiCheckSelect">
        {Array.isArray(items) &&
          items.map((item) => (
            <td key={item.id}>
                <input type="checkbox" />
              {item.name}
            </td>
          ))}
    </tr>
  );
};





// import { Friend } from "../../interfaces/Users";

// export interface multiCheckProp<T> {
//     data: T;
// }

// export const MultiCheckSelect = <T,>({data}:multiCheckProp<T>) => {
//     console.log(data)
//     const friends = (data as any).friends;
//     return(
//         <td>
//             <ul>
//                 {
//                     friends && friends.map((friend: Friend) =>  (
//                         <li key={friend.id}>{friend.name}</li>
//                     ))
//                 }
//             </ul>
//         </td>
//     )
// }