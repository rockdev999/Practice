import React, { useState } from "react";

interface RowData {
  id: number;
  name: string;
  age: number;
}

interface DetailComponentProps {
  data: RowData;
  onBack: () => void;
}

const DetailComponent: React.FC<DetailComponentProps> = ({ data, onBack }) => (
  <div>
    <h2>Detalle de la fila seleccionada</h2>
    <p>ID: {data.id}</p>
    <p>Nombre: {data.name}</p>
    <p>Edad: {data.age}</p>
    <button onClick={onBack}>Volver</button>
  </div>
);

const TableComponent: React.FC = () => {
  const [selectedRow, setSelectedRow] = useState<RowData | null>(null);

  const data: RowData[] = [
    { id: 1, name: "Juan", age: 25 },
    { id: 2, name: "María", age: 30 },
    { id: 3, name: "Carlos", age: 22 },
  ];

  const handleRowClick = (row: RowData) => {
    setSelectedRow(row);
  };

  const handleBack = () => {
    setSelectedRow(null);
  };

  return (
    <div>
      {selectedRow ? (
        <DetailComponent data={selectedRow} onBack={handleBack} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id} onClick={() => handleRowClick(row)}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableComponent;