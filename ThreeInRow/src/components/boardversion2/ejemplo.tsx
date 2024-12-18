import { useState } from "react";

type Friend = {
    id: string;
    name: string;
};

type Parent = {
    id: string;
    name: string;
    friends: Friend[];
};

type CheckboxTreeProps = {
    data: Parent[]; // Lista de padres con sus hijos
};

export const CheckboxTree = ({ data }: CheckboxTreeProps) => {
    const [selectedFriends, setSelectedFriends] = useState<string[]>([]);

    // Manejo de selección de un hijo
    const handleChildChange = (friendId: string, parentId: string, isChecked: boolean) => {
        setSelectedFriends((prev) => {
            if (isChecked) {
                return [...prev, friendId]; // Agregar amigo seleccionado
            } else {
                return prev.filter((id) => id !== friendId); // Eliminar amigo desmarcado
            }
        });
    };

    return (
        <div>
            <h3>Selecciona los amigos:</h3>
            {data.map((parent) => (
                <div key={parent.id} style={{ marginBottom: "16px" }}>
                    <h4>{parent.name}</h4>
                    <div style={{ marginLeft: "16px" }}>
                        {parent.friends.map((friend) => (
                            <label key={friend.id} style={{ display: "block" }}>
                                <input
                                    type="checkbox"
                                    checked={selectedFriends.includes(friend.id)}
                                    onChange={(e) =>
                                        handleChildChange(friend.id, parent.id, e.target.checked)
                                    }
                                />
                                {friend.name}
                            </label>
                        ))}
                    </div>
                </div>
            ))}
            <h4>Amigos Seleccionados:</h4>
            <ul>
                {selectedFriends.map((friendId) => {
                    // Buscar el amigo y su padre
                    const friend = data
                        .flatMap((parent) => parent.friends)
                        .find((f) => f.id === friendId);

                    if (friend) {
                        const parent = data.find((p) =>
                            p.friends.some((f) => f.id === friendId)
                        );
                        return (
                            <li key={friendId}>
                                {parent?.name} - {friend.name}
                            </li>
                        );
                    }

                    return null;
                })}
            </ul>
        </div>
    );
};