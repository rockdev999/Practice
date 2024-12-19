import React, { useState } from "react";
import { User,Friends } from "../../interfaces/Users";

interface SelectFriendsComponentProps {
  data: User[];
}

export const MultiCheckSelect: React.FC<SelectFriendsComponentProps> = ({ data }) => {
  const [selectedData, setSelectedData] = useState<{name: string; selectedFriends: Friends[]}[]>([])

  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const toggleExpand = (id: number) => {
    setExpandedItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  const handleFriendToggle = (itemName: string, friend: Friends) => {
    setSelectedData((prevSelected) => {
      const existingItem = prevSelected.find((item) => item.name === itemName);

      if (existingItem) {
        const isFriendSelected = existingItem.selectedFriends.some(
          (f) => f.id === friend.id
        )

        if (isFriendSelected) {
          existingItem.selectedFriends = existingItem.selectedFriends.filter(
            (f) => f.id !== friend.id
          )
        } else {
          existingItem.selectedFriends.push(friend)
        }

        return [...prevSelected]
      } else {
        return [...prevSelected, { name: itemName, selectedFriends: [friend] }]
      }
    })
  }

  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>
              <span
                onClick={() => toggleExpand(Number(item.id))}
              >
                {item.name}
              </span>
            </div>
            {expandedItems.includes(Number(item.id)) && (
              <ul>
                {item.friends.map((friend) => (
                  <li key={friend.id}>
                    <label>
                      <input
                        type="checkbox"
                        checked={selectedData
                          .find((selectedItem) => selectedItem.name === item.name)
                          ?.selectedFriends.some((f) => f.id === friend.id) || false}
                        onChange={() => handleFriendToggle(item.name, friend)}
                      />
                      {friend.name}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      <h4>Resultado:</h4>
      <ul>
        {selectedData.map((item) => (
          <li key={item.name}>
            <strong>{item.name}:</strong>
            {
                item.selectedFriends.map((friend) => (
                    <h5>{friend.name}</h5>
                ))
            }
          </li>
        ))}
      </ul>
    </div>
  );
};
