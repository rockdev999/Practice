import React, { useState } from "react";

// Tipo de datos para representar un padre y sus hijos
interface Parent {
  name: string;
  children: string[];
}

const IndeterminateCheckbox: React.FC = () => {
  // Datos de los padres y sus hijos
  const parents: Parent[] = [
    {
      name: "Parent 1",
      children: ["Child 1.1", "Child 1.2", "Child 1.3"],
    },
    {
      name: "Parent 2",
      children: ["Child 2.1", "Child 2.2"],
    },
  ];

  // Estado para manejar los checkboxes de los padres e hijos
  const [checked, setChecked] = useState(
    parents.map((parent) => ({
      parent: false,
      children: parent.children.map(() => false),
    }))
  );

  // Estado para almacenar los hijos seleccionados
  const [selectedChildren, setSelectedChildren] = useState<{
    [key: string]: string[];
  }>({});

  // Cambiar estado de todos los hijos de un padre
  const handleParentChange = (index: number) => {
    const newChecked = [...checked];
    const allSelected = !newChecked[index].parent;
    newChecked[index].parent = allSelected;
    newChecked[index].children = newChecked[index].children.map(
      () => allSelected
    );
    setChecked(newChecked);
    updateSelectedChildren(newChecked);
  };

  // Cambiar estado de un hijo específico
  const handleChildChange = (parentIndex: number, childIndex: number) => {
    const newChecked = [...checked];
    newChecked[parentIndex].children[childIndex] =
      !newChecked[parentIndex].children[childIndex];

    // Actualizar el estado del padre
    newChecked[parentIndex].parent =
      getParentCheckboxState(parentIndex) === "full";
    setChecked(newChecked);
    updateSelectedChildren(newChecked);
  };

  // Determinar el estado del checkbox del padre (full, parcial, vacio)
  const getParentCheckboxState = (
    parentIndex: number
  ): "full" | "parcial" | "vacio" => {
    const allSelected = checked[parentIndex].children.every((child) => child);
    const someSelected = checked[parentIndex].children.some((child) => child);

    if (allSelected) {
      return "full"; // Todos los hijos están seleccionados
    } else if (someSelected) {
      return "parcial"; // Algunos hijos están seleccionados
    } else {
      return "vacio"; // Ningún hijo está seleccionado
    }
  };

  // Actualizar los hijos seleccionados en el estado
  const updateSelectedChildren = (newChecked: any) => {
    const updatedSelected: { [key: string]: string[] } = {};

    parents.forEach((parent, parentIndex) => {
      const selected = parent.children.filter(
        (_, childIndex) => newChecked[parentIndex].children[childIndex]
      );
      if (selected.length > 0) {
        updatedSelected[parent.name] = selected;
      }
    });

    setSelectedChildren(updatedSelected);
  };

  return (
    <div>
      {parents.map((parent, parentIndex) => {
        const parentCheckboxState = getParentCheckboxState(parentIndex);

        return (
          <div key={parentIndex} style={{ marginBottom: "20px" }}>
            {/* Checkbox para el padre */}
            <label>
              <input
                type="checkbox"
                checked={parentCheckboxState === "full"}
                indeterminate={parentCheckboxState === "parcial"}
                onChange={() => handleParentChange(parentIndex)}
                style={{ marginRight: "8px" }}
              />
              {parent.name} ({parentCheckboxState})
            </label>

            {/* Checkbox para los hijos */}
            <div style={{ marginLeft: "20px" }}>
              {parent.children.map((child, childIndex) => (
                <div key={childIndex}>
                  <label>
                    <input
                      type="checkbox"
                      checked={checked[parentIndex].children[childIndex]}
                      onChange={() =>
                        handleChildChange(parentIndex, childIndex)
                      }
                      style={{ marginRight: "8px" }}
                    />
                    {child}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Mostrar los hijos seleccionados */}
      <div style={{ marginTop: "20px" }}>
        <h3>Hijos seleccionados:</h3>
        {Object.keys(selectedChildren).map((parentName) => (
          <div key={parentName}>
            <strong>{parentName}:</strong>
            <ul>
              {selectedChildren[parentName].map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndeterminateCheckbox;
